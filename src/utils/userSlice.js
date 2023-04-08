import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
   isSignedIn : false,
  },
  reducers: {
    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    
  },
});

export const { setSignedIn} = userSlice.actions;

export default userSlice.reducer;