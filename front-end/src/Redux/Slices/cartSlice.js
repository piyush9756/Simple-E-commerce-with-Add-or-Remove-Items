import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:[],
        totalPrice: 0
        
    },
    reducers:{
        addToCart: (state, action) =>{ 
            const itemIndex = state.cartItems.findIndex(item=>item.id === action.payload.product.id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1
                
            }else{
                const tempProduct = {...action.payload.product, cartQuantity: 1};
                state.cartItems.push(tempProduct); 
            }
            localStorage.setItem("cart",JSON.stringify(state.cartItems));
        },
        removeFromCart: (state,action)=>{
            const itemIndex = state.cartItems.findIndex(item=> item.id === action.payload.product.id);
            if(state.cartItems[itemIndex].cartQuantity >1 ){
                state.cartItems[itemIndex].cartQuantity -= 1
            }else{
                state.cartItems.splice(itemIndex,1);
            }
            localStorage.setItem("cart",JSON.stringify(state.cartItems));
        },
        quantityCounter:(state,action)=>{
            const itemIndex = state.cartItems.findIndex(item=> item.id === action.payload.product.id);
            state.cartItems[itemIndex].cartQuantity = action.payload.quantityNo;
            localStorage.setItem("cart",JSON.stringify(state.cartItems));
        },
        sizePicker: (state,action)=>{
            const itemIndex = state.cartItems.findIndex(item=> item.id === action.payload.product.id);
            state.cartItems[itemIndex].pickedSize=   action.payload.size;
        },
        setCart: (state,action)=>{
            state.cartItems= action.payload;
        },
        
    }
})

export const {addToCart,removeFromCart , quantityCounter ,sizePicker ,setCart} = cartSlice.actions;
export default cartSlice.reducer;