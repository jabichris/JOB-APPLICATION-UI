import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice"
import applicationSlice from "./features/application/applicationSlice"
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        application:applicationSlice.reducer
    }
})

export default store