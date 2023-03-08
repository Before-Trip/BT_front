import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import style from './Login.module.css'

function Login() {

    const [cookies, setCookie, removeCookie] = useCookies('refresh');

    const [inputValue, setInputValue] = useState({
        id: "",
        pw: "",
    })

    const handleOnChange = (e) => {
        const { value, name } = e.target

        setInputValue({
            ...inputValue,
            [name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/users/auth/', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: inputValue.id,
                password: inputValue.pw,
            })
        }).then(res => res.json())
            .then(console.log)

    }

    const handleRefresh = () => {
        let prom = fetch('http://127.0.0.1:8000/users/auth/refresh/', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                refresh: cookies.refresh
            })
        })
        console.log(cookies.refresh)
        prom.then(res => res.json())
            .then(console.log)
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
        </section>
    )
}

export default Login