import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    selectedView: 0
};

export const optsSlice = createSlice({
    name: "opts",
    initialState,
    reducers: {
        changeView: (state, action) => {
            state.selectedView = action.payload
        }
    }
});

export const { changeView } = optsSlice.actions;

export const selectOpts = (state) => state.opts;

export default optsSlice.reducer;
