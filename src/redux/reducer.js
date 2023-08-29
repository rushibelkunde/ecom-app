import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    products: [],
    cart: []
}

// creating cart slice
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        initializeProducts: (state, action) => {
            state.products = [...action.payload]
            
        },

        addProduct: (state,action)=>{
            state.products = [action.payload,...state.products]

        },

        removeFromProducts: (state,action)=>{

            const index = state.products.findIndex((i)=> i.id === action.payload.id)
            if(index!==-1){
                state.products.splice(index,1)
            }
        },

        update:(state,action)=>{

            const index = state.products.findIndex((i)=> i.id === action.payload.id)
            if(index!==-1){
                state.products[index].name = action.payload.name
                state.products[index].price = action.payload.price
                state.products[index].description = action.payload.description
                state.products[index].imageUrl = action.payload.imageUrl
            }
        },

        addToCart: (state,action) =>{
            const index = state.cart.findIndex((i)=> i.id === action.payload.id)
            if(index===-1){
                state.cart = [...state.cart, action.payload]
                return
            }
            state.cart[index].count += 1 
        },

        incCount: (state,action)=>{
            const index = state.cart.findIndex((i)=> i.id === action.payload.id)
            console.log(index)
            if(index!==-1){
                state.cart[index].count += 1 
                console.log(state.cart[index].count)
            }
        },

        decCount:(state,action)=>{
            const index = state.cart.findIndex((i)=> i.id === action.payload.id)
            console.log(index)
            if(index!==-1){
                state.cart[index].count>0? state.cart[index].count-= 1 : state.cart[index].count-= 0
            }

        },

        removeFromCart: (state,action)=>{
            const index = state.cart.findIndex((i)=> i.id === action.payload.id)
            console.log(index)
            if(index!==-1){
                state.cart.splice(index,1)
            }
        }
    }
})

export const cartReducer = cartSlice.reducer

export const actions = cartSlice.actions