import { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../utils/const'
import { getRefresh } from '../../utils/getRefresh'
import style from './Login.module.css'
import { useCookies } from 'react-cookie';

function Login() {

    const [, , removeCookie] = useCookies();

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState({
        id: "",
        pw: "",
    })

    const handleOnChange = (e) => {
        const { value, name } = e.target

        setInputValue({
            ...inputValue,
            [name]: value
        })
    }

    const loginUser = async (args) => {
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

        // console.log(loginRes)

        if (loginRes.ok) {
            const loginResData = await loginRes.json()
            // console.log(loginResData)
            return loginResData.token.refresh
        }

    }

    const getCommentList = async (token) => {
        const commentsRes = await fetch(`${BASE_URL}articles/review/1/comment/`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })

        if (commentsRes.ok) {
            const commentData = await commentsRes.json();
            console.log(commentData)
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault();

        const accessToken = await loginUser(inputValue);



        // if (accessToken) {
        //     // console.log(accessToken)
        //     await getRefresh()
        // }

    }
    const handleRefresh = async () => {
        // console.log("요청 보내기전: ", cookies.refresh)
        const refreshToken = await getRefresh();
        console.log(refreshToken)
    }

    const handleLogout = async () => {
        const logoutRes = await fetch(`${BASE_URL}users/auth`, {
            method: 'DELETE',
            headers: {
                // 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })

        if (logoutRes.ok) {
            const logOut = await logoutRes.json()
            console.log(logOut)
            removeCookie('refresh', { path: '/' })
            navigate('/')
            // return redirect('/')
        }
    }
    return (
        <section className={style.Login}>
            <Link to="/" className={style.logo}>
                <img src={process.env.PUBLIC_URL + '/assets/logo.png'} />
            </Link>
            <form className={style.loginForm} onSubmit={handleSubmit}>
                <input name="id" type='text' value={inputValue.id} onChange={handleOnChange} />
                <input name="pw" type='password' value={inputValue.pw} onChange={handleOnChange} />
                <button type='submit' className={style.button}>
                    로그인
                </button>
            </form>
            <button type='submit' className={style.button} onClick={handleRefresh}>
                리프레시 해주세용
            </button>
            <button type='submit' className={style.button} onClick={handleLogout}>
                로그아웃 해주세용
            </button>
        </section>
    )
}

export default Login