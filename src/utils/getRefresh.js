import { BASE_URL } from "./const"
import { getCookieToken } from "./cookies"

export const getRefresh = async () => {
    // 발급받은 리프레시 토큰이 있는지 확인(로그인 여부 확인)
    const refreshToken = getCookieToken();

    if (!refreshToken) return null
    console.log(refreshToken)

    // 있다면, accessToken 발급 요청
    const refreshTokenRes = await fetch(`${BASE_URL}users/auth/refresh/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            refresh: refreshToken
        })
    })

    // 새로 받아온 accessToken이 있다면,
    if (refreshTokenRes.ok) {
        const Token = await refreshTokenRes.json()
        console.log(Token)
        return Token ? 'success' : null
    }
}