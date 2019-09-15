import axios from 'axios';
// Action type variables
export const FETCHING_AMIIBO_START = "FETCHING_AMIIBO_START";
export const FETCHING_AMIIBO_END = "FETCHING_AMIIBO_END";
export const FETCHING_AMIIBO_ERR = "FETCHING_AMIIBO_ERR";

// Thunk function to run actions
export const getAmiibo = amiiboName => dispatch => {
	dispatch({type: FETCHING_AMIIBO_START});
	// console.log("FROM GET AMIIBO ACTION CREATOR", amiiboName);
	
	// AmiiboName will be false on initial render
	if(!amiiboName){
		// console.log("MADE IT INTO THE IF");
		axios('https://www.amiiboapi.com/api/amiibo/')
		.then(res => dispatch({type: FETCHING_AMIIBO_END, payload: res.data.amiibo}))
		.catch(err => console.log(err))
	} else {
		axios(`https://www.amiiboapi.com/api/amiibo/?name=${amiiboName}`)
		.then(res => dispatch({type: FETCHING_AMIIBO_END, payload: res.data.amiibo}))
		.catch(err => console.log(err))
	}
}