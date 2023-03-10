import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from './userSlice'

export const store = configureStore({
    reducer: {
        userInfo: userInfoReducer,
    }
})