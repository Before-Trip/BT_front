import { BASE_URL } from "./const"

export const getRefresh = async () => {
    const refreshTokenRes = await fetch(`${BASE_URL}users/auth/refresh/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            // 'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            refresh:
                document.cookie.match(new RegExp("(?:^|; )" + "refresh".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))[1]
        })
    })

    if (refreshTokenRes.ok) {
        const Token = await refreshTokenRes.json()
        console.log(Token)
        return Token.access
    }
}