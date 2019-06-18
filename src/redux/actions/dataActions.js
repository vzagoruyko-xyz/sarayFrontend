export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAIL = 'GET_DATA_FAIL';

export function getData(url) {
    return (dispatch) => {
        dispatch({
            type: GET_DATA_REQUEST,
        })

        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            dispatch({
                type: GET_DATA_SUCCESS,
                payload: response,
            })
        })
        .catch(error => {
            dispatch({
                type: GET_DATA_FAIL,
                payload: error,
            })
        })
    }
}