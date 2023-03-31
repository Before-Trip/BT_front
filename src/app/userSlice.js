import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userInfo',
    initialState: {
        name: "",
        id: null,
        email: null,
        isLogined: null,
        isLoading: false,
    },
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
            state.isLogined = true;
            console.log("로그인 되었습니다.")
        },

        logoutUser: (state) => {
            state.name = "";
            state.email = "";
            state.isLogined = false;
            console.log("로그아웃되었습니다.")
        }
    }
})

export const { login, logoutUser } = userSlice.actions
export default userSlice.reducer