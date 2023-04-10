import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userInfo',
    initialState: {
        name: "",
        id: null,
        email: null,
        isLogined: false
    },
    reducers: {
        loginUser: (state, action) => {
            state.email = action.payload.email;
            state.isLogined = true;
            console.log("유저 정보가 로그인 되었습니다.")
        },

        logoutUser: (state) => {
            state.name = "";
            state.email = "";
            state.isLogined = false;
            console.log("유저 정보가 로그아웃되었습니다.")
        }
    }
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer