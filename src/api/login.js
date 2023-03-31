import { BASE_URL } from '../utils/const'

export const logout = async () => {
    const logoutRes = await fetch(
        `${BASE_URL}users/auth/`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return logoutRes ? logoutRes.json() : null
}