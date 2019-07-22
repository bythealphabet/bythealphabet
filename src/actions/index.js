import * as call from "../apis/article-api";

import { FETCH_ARTICLES } from "./types";

const fetchArticles = () => async dispatch => {
	const response = await call.list();
	dispatch({
		type: FETCH_ARTICLES,
		payload: response
	});
};

const createArticles = (data) => async dispatch =>{
	const response = await call.create(data)
	dispatch({
		type: FETCH_ARTICLES,
		payload: response
	});
}

const editArticles = (data) => async dispatch =>{
	const response = await call.create(data)
	dispatch({
		type: FETCH_ARTICLES,
		payload: response
	});
}

export { fetchArticles, createArticles, editArticles };
