import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name:"theme",
    initialState:{
        darkTheme: false
    },
    reducers:{
        switchTheme:(state,action)=>{
            state.darkTheme = !state.darkTheme;
        }
    }
});
export const { switchTheme} = themeSlice.actions;
export default themeSlice.reducer;