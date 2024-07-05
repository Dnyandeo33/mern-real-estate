import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux-toolkit/user/userSlice";

const store = configureStore({
    reducer: {
        // reducers
        user: userSlice,
    },
})

export default store;
