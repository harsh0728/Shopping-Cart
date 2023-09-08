import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     value:0
// }

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => 
      
        item.id !== action.payload
      
      );
    },
    // increment:(state)=>{
    //     state.value+=1;
    // },
    // decrement:(state)=>{
    // state.value-=1;
    // }
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
