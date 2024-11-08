
import { configureStore } from "@reduxjs/toolkit"
import {PreloaderSlice} from "./features/preloader-slice"




const store = configureStore({
    reducer: {
        preloader:PreloaderSlice.reducer,

    }
})


export default store