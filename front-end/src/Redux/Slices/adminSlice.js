import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createNewProduct = createAsyncThunk(
    "admin/createProduct",
    async(args)=>{
        const {token} = JSON.parse(localStorage.getItem("user"));
        try{
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URI}/api/admin/products`,{
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
);

export const removeProduct = createAsyncThunk(
    "admin/removeProduct",
    async(args)=>{
        const {token} = JSON.parse(localStorage.getItem("user"));
        try{
            const res = await fetch(`${process.env.BACKEND_URI}/api/admin/products`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                },
                body:JSON.stringify(args)
            });
                const response = await res.json();
                return response;
        }catch(err){
        console.log(err)
        return err.message
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