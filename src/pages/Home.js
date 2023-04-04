import { Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRefresh } from "../utils/getRefresh";
import { BASE_URL } from "../utils/const";
import { login } from "../app/userSlice";
import { useState } from "react";


function Home() {

    const [loading, setIsLoading] = useState(true)

    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.userInfo.isLogined)

    const checkLoggedIn = async () => {
        // 로그인 되어 있는 경우
        if (isLoggedIn) {
            console.log("로그인되어 있는 유저입니다.")
            return
        }

        else {
            const token = await getRefresh();
            if (token) {
                // refresh token이 있으면 로그인 유지 요청
                const dataRes = await fetch(`${BASE_URL}users/auth/`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                })


                if (dataRes.ok) {
                    console.log("로그인 요청 성공", dataRes)
                    try {
                        const userInfoData = await dataRes.json()
                        dispatch(login(userInfoData))
                        console.log("로그인 성공")
                    }
                    catch {
                        console.log("로그인 실패", dataRes.error.message)
                    }
                }
            }

            // 토큰이 없으면 -> 유저 정보가 없다(로그인을 한 번도 안 함)
            // 하지만 authorization에서 걸러질 것(필요하다면,)
        }
    }

    useEffect(() => {
        checkLoggedIn().finally(() => setIsLoading(false))
    }, [])

    if (!loading) return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Home