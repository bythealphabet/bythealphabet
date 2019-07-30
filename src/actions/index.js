// import * as call from "../apis/article-api";
import * as call from "../apis/heroku-api";
// import { signin, signout } from "../apis/auth/api-auth";
// import auth from "../apis/auth/auth-helper";
import * as art from "./types";
import history from "../history";

const signIn = userId => {
	return {
		type: "SIGN_IN",
		payload: userId
	};
};

const signOut = user => {
	return {
		type: "SIGN_OUT"
	};
};

const fetchArticles = () => async dispatch => {
	const response = await call.list();
	dispatch({
		type: art.FETCH_ARTICLES,
		payload: response
	});
};

const readArticle = param => async dispatch => {
	const response = await call.read(param);
	dispatch({
		type: art.READ_ARTICLE,
		payload: response
	});
};

const createArticles = data => async dispatch => {
	const response = await call.create(data);
	console.log('data:',data)
	dispatch({
		type: art.CREATE_ARTICLES,
		payload: response
	});
	history.push("/articles");
};

const editArticles = data => async dispatch => {
	const response = await call.update(data);
	dispatch({
		type: art.EDIT_ARTICLES,
		payload: response
	});
};

export {
	fetchArticles,
	createArticles,
	editArticles,
	signIn,
	signOut,
	readArticle
};
