import axios from 'axios';
// Action type variables
export const FETCHING_AMIIBO_START = "FETCHING_AMIIBO_START";
export const FETCHING_AMIIBO_END = "FETCHING_AMIIBO_END";
export const FETCHING_AMIIBO_ERR = "FETCHING_AMIIBO_ERR";

// Thunk function to run actions
export const getAmiibo = () => dispatch => {
	dispatch({type: FETCHING_AMIIBO_START});
}