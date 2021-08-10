import { FETCH_DATA_REQUEST, RECEIVE_DATA } from '../constants/index';
import { parseJSON } from '../utils/misc';
import { fetch_data } from '../utils/http_functions';
import { logoutAndRedirect } from './auth';

export function receiveData(data) {
    return {
        type: RECEIVE_DATA,
        payload: {
            records: data,
        },
    };
}

export function fetchDataRequest() {
    return {
        type: FETCH_DATA_REQUEST,
    };
}

export function fetchData(dispatch) {
    dispatch(fetchDataRequest());
    fetch_data()
        .then(parseJSON)
        .then(response => {
            dispatch(receiveData(response));
        })
        .catch(error => {
            if (error.status === 401) {
                dispatch(logoutAndRedirect(error));
            }
        });
}
