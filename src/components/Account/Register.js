import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../../api/login"

const Register = () => {

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
        if (registerRes) {
            console.log(registerRes)

        }
        navigate('/')
    }

    return (
        <div className="Register">
            <form onSubmit={handleSubmmit}>
                <input type="text" name="id" onChange={handleOnChange} />
                <input type="password" name="pw" onChange={handleOnChange} />
                <button type='submit'>
                    회원가입
                </button>
            </form>
        </div>
    )
}

export default Register