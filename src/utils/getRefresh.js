export const getRefresh = async () => {
    const refreshTokenRes = await fetch('http://127.0.0.1:8000/users/auth/refresh/', {
        method: 'POST',
        credentials: 'include',
        headers: {
            // 'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            refresh:
                document.cookie.match(new RegExp("(?:^|; )" + "refresh".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))[1]
            // cookies.refresh
        })
    })

    if (refreshTokenRes.ok) {
        const refreshToken = await refreshTokenRes.json()
        // console.log(refreshToken)
        return refreshToken
    }
}