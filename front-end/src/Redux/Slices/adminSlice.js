import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createNewProduct = createAsyncThunk(
    "admin/authedRequest",
    async(args)=>{
        const {token} = JSON.parse(localStorage.getItem("user"));
        console.log(token);
        try{
            const res = await fetch("http://localhost:5000/api/test",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                },
                body:JSON.stringify(args)
            });
            const product = await res.json();
            return product;
        }catch(err){
            console.log(err);
            return err.message;
        }
        
    }
)

const adminSlice = createSlice({
   name: "admin",
    initialState:{
        product: null,
        err:null
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(createNewProduct.pending,(state,action)=>{

        })
        .addCase(createNewProduct.fulfilled,(state,action)=>{
            state.product = action.payload;
        })
        .addCase(createNewProduct.rejected,(state,action)=>{

        })
        
    }
})

export default adminSlice.reducer;