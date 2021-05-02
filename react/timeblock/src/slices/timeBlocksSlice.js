import { createSlice } from '@reduxjs/toolkit';

// const preStateStr = '[{"date": "2021-05-02", "time": "07:00", "length": 1, "event": "Sport:Run", "note": "abcdefg", "color": "246845"}, {"date": "2021-05-02", "time": "07:30", "length": 3, "event": "Sport:Run", "note": "note2", "color": "246845"}, {"date": "2021-05-02", "time": "09:00", "length": 5, "event": "Study", "note": "note2", "color": "246845"}]';
const preStateStr = '[]';

const initialState = 
    {records: JSON.parse(preStateStr)};

export const timeBlocksSlice = createSlice({
    name: "timeBlocks",
    initialState,
    reducers: {
        changeTimeBlocks: (state, action) => {
            state.records = action.payload
        },
    }
});

export const { changeTimeBlocks } = timeBlocksSlice.actions;

export default timeBlocksSlice.reducer;
