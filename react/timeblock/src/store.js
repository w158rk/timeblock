import { configureStore } from '@reduxjs/toolkit';
import optsReducer from './slices/optsSlice';
import timeBlocksReducer from './slices/timeBlocksSlice'

const store = configureStore({
    reducer: {
        opts: optsReducer,
        timeBlocks: timeBlocksReducer
    },
});

export default store;

export { changeView } from './slices/optsSlice';
export { changeTimeBlocks } from './slices/timeBlocksSlice';