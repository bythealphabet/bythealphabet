import { list } from "../apis/article-api";

import { FETCH_ARTICLES } from "./types";

const fetchArticles = () => async dispatch => {
	const data = await list();
	dispatch({
		type: FETCH_ARTICLES,
		payload: data
	});
};

export { fetchArticles };
