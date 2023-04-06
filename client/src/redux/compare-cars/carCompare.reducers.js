/*
    Author: Utsavkumar Jayantibhai Italiya - ut437158@dal.ca (B00935447)
*/
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cars: [],
    compareCars: [],
};

const carCompareSlice = createSlice({
    name: "carCompare",
    initialState: INITIAL_STATE,
    reducers: {
        fetchCarList(state, { payload }) {
            state.cars = payload;
        },
        addCompareCar(state, action) {
            if (state.compareCars.length >= 2) {
                state.compareCars = [];
            }
            state.compareCars.push(action.payload);
        },
        removeCompareCar(state,action)
        {
            state.compareCars.splice(state.compareCars.indexOf(action.payload),1);
        },
    },
});

export const {addCompareCar,removeCompareCar,fetchCarList } = carCompareSlice.actions;

export default carCompareSlice.reducer;
