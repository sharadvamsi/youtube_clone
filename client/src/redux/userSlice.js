import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'users',
    initialState:{
        userData:[],
        userToken:"",
        userChannel:[]
    },
    reducers:{
        getUserData:(state,action)=>{
            state.userData.push(action.payload[0]);
            state.userToken = action.payload[1];
        },
        resetUserData: (state) => {
            state.userData = [];
            state.userToken = "";
        },
        updateUserChannel:(state,action)=>{
            state.userChannel = action.payload;
        }
    }
});


export const {getUserData,resetUserData,updateUserChannel} = userSlice.actions;

export default userSlice.reducer;

