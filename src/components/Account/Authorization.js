import { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../app/userSlice";
import { BASE_URL } from "../../utils/const";
import { getRefresh } from "../../utils/getRefresh";

const Authorization = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const isLogged = useSelector((state) => state.userInfo.isLogined)

    const userFetch = async () => {
        const token = await getRefresh()
        if (token) {
            const dataRes = await fetch(`${BASE_URL}users/auth/`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            }).catch(() => {
                console.log("로그인되지 않은 유저입니다.")
                return
            })
            const data = await dataRes.json();
            console.log(data)
            dispatch(login(data))
        }
    }

    useEffect(() => {
        if (!isLoading && !isLogged) {
            const result = window.confirm("로그인이 필요한 서비스입니다. 로그인 페이지로 이동하시겠습니까?")
            if (result) {
                navigate('/account/login')
            }
        }
    }, [isLoading])

    if (isLoading) {
        userFetch().finally(() => {
            setIsLoading(false);
        })
    }

    if (isLoading) {
        console.log(isLogged)
        return <>정보를 불러오고 있습니다.</>
    }

    if (!isLoading && isLogged) {
        return <>{children}</>
    }
}

export default Authorization