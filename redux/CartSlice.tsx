import { createSlice,PayloadAction } from '@reduxjs/toolkit'
 
interface CartItem {

    id:number,
    quantity:number

}
interface CartState {
    cartitem:CartItem[]
}
const initialState:CartState = {
  cartitem: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<CartItem>) => {
      
      const newItem = {
        ...action.payload,
        quantity: 1, 
      };
      state.cartitem.push(newItem);
    },
   
    deleteFromCart: (state, action:PayloadAction<number>) => {
      state.cartitem = state.cartitem.filter(item => item.id !== action.payload);
    },
    
    increment: (state, action:PayloadAction<number>) => {
      const item = state.cartitem.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    
      
    },
    decrement: (state, action:PayloadAction<number>) => {
      const item = state.cartitem.find(item => item.id === action.payload);
      if ( item&&   item.quantity > 1) {
        item.quantity--;
      }
    },
   
  },
});


export const { addToCart, deleteFromCart,increment,decrement} = cartSlice.actions

export default cartSlice.reducer