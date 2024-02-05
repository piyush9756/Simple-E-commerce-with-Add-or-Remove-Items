import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
/* import axios from "axios"; */
//creating actionCreator for register
   export const register = createAsyncThunk(
    "user/register",
    async(args)=>{
        try{
             const res = await fetch("http://localhost:5000/api/user/signup",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(
                    {
                        email:args.email,
                        password:args.password,
                        displayName: args.displayName
                    })
            });
            const data = await res.json();
            if(res.ok){
                localStorage.setItem("user",JSON.stringify(data));
            }
            console.log(data);
            return data;
        }catch(err){
            console.log(err);
            return err
        }
    });
    
    export const login = createAsyncThunk(
        "user/login",
    async(args)=>{
            try{
                const res = await fetch("http://localhost:5000/api/user/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(
                    {
                        email:args.email,
                        password:args.password
                    })
            });
            const data = await res.json();
            if(res.ok){
                localStorage.setItem("user",JSON.stringify(data));
            }
                return data;
            }catch(err){
                console.log(err);
                return err
            }
            
    }
    );

    export const logout = createAsyncThunk(
        "user/logout",
        async(user)=>{
            localStorage.removeItem("user");
            localStorage.removeItem("cart");
        }
    )


const cartSlice = createSlice({
    name:"user",
    initialState:{
        isLoading:null,
        error:null,
        googleId:null,
        user : null
    },
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload;
        }
    },
    extraReducers(builder){
        builder
        //register action creator
        .addCase(register.pending,(state,action)=>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(register.fulfilled,(state,action)=>{
            state.isLoading = false;
            if(action.payload.error){
                state.error = action.payload.error;
                state.user = null;
            }else{
                state.user = action.payload;
            }
        })
        .addCase(register.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
        //login action creator
        .addCase(login.pending,(state,action)=>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading = false;
            if(action.payload.error){
                state.error = action.payload.error;
                state.user = null;
            }else{
                state.user = action.payload;
            }
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
        //logout action creator
        .addCase(logout.pending,(state,action)=>{

        })
        .addCase(logout.fulfilled,(state,action)=>{
            state.user = null
        })
        .addCase(logout.rejected,(state,action)=>{
            
        })
    
    }
})
export const {setUser} =cartSlice.actions;
export default cartSlice.reducer;