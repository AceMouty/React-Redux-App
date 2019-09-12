// Bring in Action varibales
import { FETCHING_AMIIBO_START, FETCHING_AMIIBO_END, FETCHING_AMIIBO_ERR} from '../actions';

const initialState = {
	amiiboData: null,
	isFetching: false,
	error: ""
}

export const reducer = (state = initialState, action) => {
	switch(action.type) {
		// case FETCHING_AMIIBO_START: 
		// return {
		// 	...state,
		// 	isFetching: true,
		// 	error: ""
		// }
		default:
			return state;
	}
}