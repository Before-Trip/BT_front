import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../../api/login"
import { useDispatch } from "react-redux"
import { loginUser } from "../../app/userSlice"
import style from './Register.module.css'

const Register = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()
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

    const handleSubmmit = async (e) => {
        e.preventDefault();

        const registerRes = await register(inputValue)

        if (registerRes === 'fail') return
        dispatch(loginUser(registerRes.userInfo))

        console.log("회원가입이 완료되었습니다.")
        navigate('/')
    }

    return (
        <section className={style.Register}>
            <form onSubmit={handleSubmmit}>
                <input type="text" name="id"
                    placeholder='아이디'
                    onChange={handleOnChange} />
                <input type="password" name="pw"
                    placeholder="비밀번호"
                    onChange={handleOnChange} />
                <button type='submit'>
                    회원가입
                </button>
            </form>
        </section>
    )
}

export default Register