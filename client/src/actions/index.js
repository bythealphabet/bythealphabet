import * as call from "../apis/article-api";
import {signin, signout} from '../apis/auth/api-auth'
import * as art from './types'

const signIn  = (user) => async dispatch => {
	console.log('user:',user)
	const response = await signin(user)
	console.log('response:',response)
	dispatch({
		type: 'SIGN_IN',
		payload: response
	})
}

const signOut  = (user) => async dispatch => {
	const response = await signout(user)
	dispatch({
		type: 'SIGN_OUT',
		payload: response
	})

}

const fetchArticles = () => async dispatch => {
	const response = await call.list();
	dispatch({
		type: art.FETCH_ARTICLES,
		payload: response
	});
};

const createArticles = (data) => async dispatch =>{
	const response = await call.create(data)
	dispatch({
		type: art.CREATE_ARTICLES,
		payload: response
	});
}

const editArticles = (data) => async dispatch =>{
	const response = await call.update(data)
	dispatch({
		type: art.EDIT_ARTICLES,
		payload: response
	});
}

export { fetchArticles, createArticles, editArticles, signIn, signOut };
