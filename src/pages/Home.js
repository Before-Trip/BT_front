import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../app/userSlice";
import { useState } from "react";
import { getUserInfo } from "../api/login";

function Home() {

    const [loading, setIsLoading] = useState(true)

    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.userInfo.isLogined)

    const fetchUser = async () => {
        const userInfo = await getUserInfo();

        if (userInfo === null) return

        dispatch(loginUser(userInfo))
    }

    const checkLoggedIn = async () => {
        // 로그인 되어 있는 경우
        if (isLoggedIn) {
            console.log("로그인되어 있는 유저입니다.")
            return
        }
        await fetchUser();
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