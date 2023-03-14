import { BASE_URL } from "./const"
import { getCookieToken } from "./cookies"

export const getRefresh = async () => {
    const refreshToken = getCookieToken();
    console.log(refreshToken)
    const refreshTokenRes = await fetch(`${BASE_URL}users/auth/refresh/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            // 'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            refresh: refreshToken
        })
    })

    if (refreshTokenRes.ok) {
        const Token = await refreshTokenRes.json()
        console.log(Token)
        return Token.access
    }
}