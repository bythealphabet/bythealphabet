import {
	list
} from '../apis/article-api'

import {
	SHOW_ARTICLES
} from './types'

const fetchArticles = () => async dispatch  => {
	const data = await list()
			dispatch({
				type: SHOW_ARTICLES,
				payload: data
			});
};


export {fetchArticles}