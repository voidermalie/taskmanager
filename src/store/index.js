import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./Slice/taskSlice";
import userSlice from "./Slice/userSlice";

const store = configureStore({
    reducer: {
        tasks: taskSlice,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        //Middleware personnalisé
    ])})

export default store;
