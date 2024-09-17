import {createSlice} from "@reduxjs/toolkit";

const  mainSlice = createSlice({
    name: "mainSlice",
    initialState: {
        value: 0,
    },reducers: {
        increment: (state, action) => {
            state.value += action.payload
        },
        decrement: (state, action) => {
            state.value -= action.payload
        },
        reset: (state, action) => {
            state.value = 0
        }
    }
})

export const {increment,decrement,reset} = mainSlice.actions;
export default mainSlice.reducer;