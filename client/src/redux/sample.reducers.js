import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    name: "Shivam Patel",
};

const sampleSlice = createSlice({
    name: "sample",
    initialState: INITIAL_STATE,
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
    },
});

export const { changeName } = sampleSlice.actions;

export default sampleSlice.reducer;
