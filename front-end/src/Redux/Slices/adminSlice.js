import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const testAuthed = createAsyncThunk(
    "admin/authedRequest",
    async(args)=>{
        const token = localStorage.getItem("user").token;
        const res = await fetch("http://localhost:5000/api/test",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await res.json();
            return data;
    }
)

const adminSlice = createSlice({
   name: "admin",
    initialState:{
        msg: null
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(testAuthed.pending,(state,action)=>{

        })
        .addCase(testAuthed.fulfilled,(state,action)=>{
            state.msg = action.payload;
        })
        .addCase(testAuthed.rejected,(state,action)=>{

        })
        
    }
})

export default adminSlice.reducer;