import { useEffect } from "react";
import { useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Authorization = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const isLogged = useSelector((state) => state.userInfo.isLogined)

    useEffect(() => {
        if (!isLoading && !isLogged) {
            const result = window.confirm("로그인이 필요한 서비스입니다. 로그인 페이지로 이동하시겠습니까?")
            if (result) {
                navigate('/account/login')
            }
        }
        setIsLoading(false)
    }, [isLoading])

    if (isLoading) {
        console.log(isLogged)
        return <>정보를 불러오고 있습니다.</>
    }

    if (isLogged && !isLoading) {
        return <>{children}</>
    }
}

export default Authorization