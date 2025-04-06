import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice.js";
import userReducer from "./userSlice.js"
const youtubeStore = configureStore({
    reducer:{
        video:videoReducer,
        user:userReducer
    }
})

export default youtubeStore;