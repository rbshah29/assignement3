import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    transactions: [
    ],
};

const carTransactionSlice = createSlice({
    name: "history",
    initialState: INITIAL_STATE,
    reducers: {
        addHistory(state, action) {
            state.transactions.push(action.payload);
        },
        fetchHistorySuccesss(state, { payload }) {
            state.transactions = payload;
        }
    },
});

export const { addHistory, fetchHistorySuccesss } = carTransactionSlice.actions;

export default carTransactionSlice.reducer;
