import  {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productsSlice from "./Slices/productsSlice";
import userSlice from "./Slices/userSlice";
import adminSlice from "./Slices/adminSlice";
const store = configureStore({
    reducer:{
        cart : cartReducer,
        product : productsSlice,
        user : userSlice,
        admin: adminSlice
    }
})

export default store;