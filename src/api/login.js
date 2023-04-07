import { BASE_URL } from '../utils/const'

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