import * as call from "../apis/article-api";
import { signin, signout } from "../apis/auth/api-auth";
import auth from "../apis/auth/auth-helper";
import * as art from "./types";
import history from '../history'

const signIn = user => dispatch => {
	return {
		type: "SIGN_IN"
	}
};

const signOut = user => async dispatch => {
	return {
		type: "SIGN_OUT"
	}
};

const fetchArticles = () => async dispatch => {
	const response = await call.list();
	dispatch({
		type: art.FETCH_ARTICLES,
		payload: response
	});
};

const createArticles = data => async dispatch => {
	const response = await call.create(data);
	dispatch({
		type: art.CREATE_ARTICLES,
		payload: response
	});
};

const editArticles = data => async dispatch => {
	const response = await call.update(data);
	dispatch({
		type: art.EDIT_ARTICLES,
		payload: response
	});
};

export { fetchArticles, createArticles, editArticles, signIn, signOut };
