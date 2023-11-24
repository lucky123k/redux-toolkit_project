import { createSlice } from "@reduxjs/toolkit";
import ProductDetails from "../ProductDetails"

const initialState= {
    cart: [],
    items:ProductDetails,
    totalquantity : 0,
    totalprice: 0,
};



export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart : (state, action) => {
            let find = state.cart.findIndex((item) => item.id=== action.payload.id);
            if(find>=0){
                state.cart[find].quantity+=1
            }else{
                state.cart.push(action.payload)
            }
        },

        getCartTotal: (state) => {
            let {totalquantity, totalprice} = state.cart.reduce(
                (CartTotal, cartItem) => {
                    const {price,quantity} = cartItem;
                    const itemTotal = price*quantity;
                    CartTotal.totalprice+=itemTotal;
                    CartTotal.totalquantity+=quantity;
                    return CartTotal;
                },
                {
                    totalprice:0,
                    totalquantity:0,
                }
            );
            state.totalprice= parseInt(totalprice);
            state.totalquantity= totalquantity;
        },

        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id!== action.payload);
        },

        incquantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload){
                    return{...item, quantity: item.quantity+1}
                }
                return item;
            });
        },
        decquantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload && item.quantity > 0){
                    return{...item, quantity: item.quantity-1}
                }
                return item;
            });
        },
    },
});

export const {addToCart, getCartTotal, removeItem,incquantity, decquantity } = cartSlice.actions;
export default cartSlice.reducer;