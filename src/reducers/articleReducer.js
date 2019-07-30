import _ from "lodash";
import * as art from "../actions/types";

export default (state = {}, action) => {
	switch (action.type) {
		case art.FETCH_ARTICLES:
			return {...state,..._.mapKeys(action.payload, '_id')} ;
		case art.READ_ARTICLE:
			return {...state, [action.payload._id]: action.payload};
		default:
			return state;
	}
};
