// Bring in Action varibales
import { FETCHING_AMIIBO_START, FETCHING_AMIIBO_END, FETCHING_AMIIBO_ERR} from '../actions';

const initialState = {
	amobiiData: [
		{
			amiiboSeries: "Super Smash Bros.",
			character: "Mario",
			gameSeries: "Super Mario",
			head: "00000000",
			image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png",
			name: "Mario",
			release: {
			au: "2014-11-29",
			eu: "2014-11-28",
			jp: "2014-12-06",
			na: "2014-11-21"
			},
			tail: "00000002",
			type: "Figure"
			},
	],
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
			return {
				...state,
				isFetching: false,
				amiiboData: action.payload
			}
			default:
			return state;
	}
}