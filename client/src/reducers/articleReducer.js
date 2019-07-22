import _ from "lodash";
import * as art from "../actions/types";

export default (state = {}, action) => {
	switch (action.type) {
		case art.FETCH_ARTICLES:
			return { ...state, ..._.mapKeys(action.payload, "_id") };
		case art.FETCH_ARTICLE:
			return { ...state, [action.payload.id]: action.payload };
		case art.CREATE_ARTICLES:
			return { ...state, [action.payload.id]: action.payload };
		case art.EDIT_ARTICLES:
			return { ...state, [action.payload.id]: action.payload };
		case art.DELETE_ARTICLES:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
