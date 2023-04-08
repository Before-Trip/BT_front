import { BASE_URL } from '../utils/const'
import { getCookieToken, removeCookieToken, setRefreshToken } from '../utils/cookies'
import { getRefresh } from '../utils/getRefresh'

export const register = async ({ id, pw }) => {
    const registerRes = await fetch(`${BASE_URL}users/register/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: id,
            password: pw,
        })
    })

    return registerRes.ok ? registerRes.json() : null
}

export const login = async (args) => {
    const loginRes = await fetch(`${BASE_URL}users/auth/`,
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: args.id,
                password: args.pw,
            })
        })

    // 요청을 성공했다면 토큰과 메시지를 함께 전달
    if (loginRes.ok) {
        const loginResponseData = await loginRes.json()
        setRefreshToken(loginResponseData.token.refresh)
        console.log(loginResponseData)
        // 성공이라면 유저 정보랑 같이 보냄
        return {
            result: 'success',
            userInfo: loginResponseData.user
        }
    }

    // 요청도 실패라면, 메시지만 전달(body가 없거나 다른 이유일 것)
    return 'fail'
}

export const logout = async () => {
    const logoutRes = await fetch(`${BASE_URL}users/auth/`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if (logoutRes.ok) {
        removeCookieToken();
        return
    }

    return 'fail'
}

const getAuthorize = async () => {
    const authRes = await fetch(`${BASE_URL}users/auth/`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return authRes.ok ? authRes.json() : null
}

export const getUserInfo = async () => {
    // refresh 토큰이 있는지 확인
    const refreshToken = getCookieToken();

    // 토큰이 없으면 null(로그인을 애초에 안 함)
    if (!refreshToken) return null

    // 있으면, auth에 요청해보고
    const authResult = await getAuthorize();
    if (authResult) {
        return authResult
    }

    // 토큰이 있는데 안 되면(access만료), refresh로 요청하고 다시 auth에 get요청
    else {
        const accessTokenResult = await getRefresh();
        if (!accessTokenResult) return null
        const authorResult = await getAuthorize();
        return authorResult || null
    }
}