import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState:{
        isSignIn: false,
    },
    reducers:{
        toggleSignIn: (state) =>{
            state.isSignIn = !state.isSignIn;
        },
        closeSignIn: (state) =>{
            state.isSignIn = false;
        },
    },
});
export const {toggleSignIn,closeSignIn} = appSlice.actions;
export default appSlice.reducer;