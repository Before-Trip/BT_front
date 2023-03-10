import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../app/userSlice'
import { BASE_URL } from '../../utils/const'
import { setRefreshToken } from '../../utils/cookies'
import { getRefresh } from '../../utils/getRefresh'
import style from './Login.module.css'

function Login() {
    const user = useSelector((state) => state.userInfo)

    const dispatch = useDispatch();
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
            console.log((loginResData))
            dispatch(login(loginResData.user))
            setRefreshToken(loginResData.token.refresh)
            // console.log(user)

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



        if (accessToken) {
            // console.log(accessToken)
            await getRefresh()
        }

    }
    const handleRefresh = async () => {
        // console.log("?????? ????????????: ", cookies.refresh)
        const refreshToken = await getRefresh();
        console.log(refreshToken)
    }
    return (
        <section className={style.Login}>
            <Link to="/" className={style.logo}>
                <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt='logo' />
            </Link>
            <form className={style.loginForm} onSubmit={handleSubmit}>
                <input name="id" type='text' value={inputValue.id} onChange={handleOnChange} />
                <input name="pw" type='password' value={inputValue.pw} onChange={handleOnChange} />
                <button type='submit' className={style.button}>
                    ?????????
                </button>
            </form>
            <button type='submit' className={style.button} onClick={handleRefresh}>
                ???????????? ????????????
            </button>
            <div>
                {user.email}
            </div>
        </section>
    )
}

export default Login