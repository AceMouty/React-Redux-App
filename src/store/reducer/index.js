// Bring in Action varibales
import { FETCHING_AMIIBO_START, FETCHING_AMIIBO_END, FETCHING_AMIIBO_ERR} from '../actions';

const initialState = {
	amiiboData: null,
	isFetching: false,
	error: ""
}

export const reducer = (state = initialState, action) => {
	console.log("FROM THE REDUCER, YOUR ACTION IS: ", action)
	switch(action.type) {
		case FETCHING_AMIIBO_START: 
			return {
				...state,
				isFetching: true,
				error: ""
			}
		case FETCHING_AMIIBO_END:
			console.log("MADE IT TO THE END");
			return {
				...state,
				isFetching: false,
				amiiboData: action.payload
			}
			default:
			return state;
	}
}