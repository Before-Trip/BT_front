import { useState } from "react"

const Authorization = ({ children }) => {
    const [isLogged, setIsLogged] = useState(true);

    if (!isLogged) {
        return (<>로그인 페이지로 이동합니다.</>)
    }

    return <>{children}</>
}

export default Authorization