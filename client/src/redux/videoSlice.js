import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:'videos',
    initialState:{
        allVideos:[],
        filteredVideos:[],
        categoriesList:["Music","Gaming","Sports","Entertainment","Comedy","News & Politics","Science & Technology","People & Blogs","Film & Animation"],
        sideBarCondition:false,
    },
    reducers:{
        getVideos:(state,action)=>{
            state.allVideos = action.payload;
        },
        updateSideBar:(state,action)=>{
            state.sideBarCondition = !state.sideBarCondition
        },
        updateFilteredVideos:(state,action)=>{
            state.filteredVideos = action.payload;
        }
    }
});


export const {getVideos,updateSideBar,updateFilteredVideos} = videoSlice.actions;

export default videoSlice.reducer;

