import React from "react";
import ArticleForm from './ArticleForm/ArticleForm'

class ArticleCreate extends React.Component {
	
	onSubmit = data => {
		console.log('data:',data)
	};

	render() {
		return (
			
			<ArticleForm onSubmit={this.onSubmit}/>
		);
	}
}

export default ArticleCreate;