import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:'videos',
    initialState:{
        allVideos:[],
        filteredVideos:[],
        channelVideos:[],
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
        },
        updateChannelVideos:(state,action)=>{
            state.channelVideos = action.payload;
        },
    }
});


export const {getVideos,updateSideBar,updateFilteredVideos,updateChannelVideos} = videoSlice.actions;

export default videoSlice.reducer;

