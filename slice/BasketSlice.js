import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [],
},


export const basketSlice = createSlice({

    name: 'basket',
    initialState,
    reducer: {
        addToBasket: (state, action) =>{},
        removeFromBasket: (state, action) => {},
    },
});

export const {addToBasket, removeFromBasket}= basketSlice.actions;
 
// Selectors - this is how we pull information from the global store slice

export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;