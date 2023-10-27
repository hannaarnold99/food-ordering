import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {
        const { products } = state;
        const { payload } = action;
        
        const existingProductIndex = products.findIndex(product => product.name === payload.name);
        
        if (existingProductIndex !== -1) {
            // If the product exists, update its amount
            const updatedProducts = [...products];
            updatedProducts[existingProductIndex] = {
            ...updatedProducts[existingProductIndex],
            amount: updatedProducts[existingProductIndex].amount + 1
            };

            return { products: updatedProducts };
        } else {
            // If the product doesn't exist, add it with amount 1
            return { products: [...products, { ...payload, amount: 1 }] };
        }
        },
        clearCart: (state) => {
            return { products: []}
        },
        incrementProductAmount: (state, action) => {
            return { products: state.products.map(product => product.name === action.payload.name ? {...product, amount: product.amount + 1} : product)}
        },
        decrementProductAmount: (state, action) => {
            return { products: state.products.map(product => product.name === action.payload.name ? {...product, amount: product.amount - 1} : product)}
        },

    }
})

export const cartProducts = state => state.cart.products

export const {  addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions

export default cartSlice.reducer