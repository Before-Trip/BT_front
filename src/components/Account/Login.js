import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../app/userSlice'
import style from './Login.module.css'
import { login } from '../../api/login'

function Login() {
    const user = useSelector((state) => state.userInfo)
    const navigate = useNavigate()

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

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const loginResult = await login(inputValue)

        // 로그인 요청 실패라면, 함수 종료
        if (loginResult === 'fail') return

        dispatch(loginUser(loginResult.userInfo))
        navigate(-1)
    }

    return (
        <section className={style.Login}>
            <Link to="/" className={style.logo}>
                <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt='logo' />
            </Link>
            <form className={style.loginForm} onSubmit={handleLoginSubmit}>
                <input name="id" type='text' value={inputValue.id} onChange={handleOnChange} />
                <input name="pw" type='password' value={inputValue.pw} onChange={handleOnChange} />
                <button type='submit' className={style.button}>
                    로그인
                </button>
            </form>
            <div>
                {user.email}
            </div>
        </section>
    )
}

export default Login