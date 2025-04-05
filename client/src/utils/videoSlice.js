import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:'videos',
    initialState:{
        allVideos:[],
        popularBooks:[],
        filteredBooks:[],
        categoriesList:["Music","Gaming","Sports","Entertainment","Comedy","News & Politics","Science & Technology","People & Blogs","Film & Animation"],
        sideBarCondition:false,
    },
    reducers:{
        getVideos:(state,action)=>{
            state.allVideos = action.payload;
        },
        updateSideBar:(state,action)=>{
            state.sideBarCondition = !state.sideBarCondition
        }
    }
});


export const {getVideos,updateSideBar} = videoSlice.actions;

export default videoSlice.reducer;

