// import {list, read} from "../apis/article-api";
import {list, read} from "../apis/heroku-api";

import {FETCH_ARTICLES, READ_ARTICLE} from "./types";

const fetchArticles = () => async dispatch => {
	const response = await list();
	dispatch({
		type: FETCH_ARTICLES,
		payload: response
	});
};

const readArticle = param => async dispatch => {
	const response = await read(param);
	dispatch({
		type: READ_ARTICLE,
		payload: response
	});
};


export {
	fetchArticles,
	readArticle
};
