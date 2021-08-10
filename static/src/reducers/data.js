import { RECEIVE_DATA, FETCH_DATA_REQUEST } from '../constants';
import { createReducer } from '../utils/misc';

const initialState = {
    records: [],
    isFetching: false,
    loaded: false,
};

export default createReducer(initialState, {
    [RECEIVE_DATA]: (state, payload) =>
        Object.assign({}, state, {
            records: payload.records,
            isFetching: false,
            loaded: true,
        }),
    [FETCH_DATA_REQUEST]: (state) =>
        Object.assign({}, state, {
            isFetching: true,
        }),
});
