import React from "react";
import ArticleForm from "./ArticleForm/ArticleForm";
import HeroLogo from "../../components/HeroLogo/HeroLogo";
import { connect } from "react-redux";
import { createArticles } from "../../actions";
import Aux from "../../hoc/_Aux";
import Modal from "../../components/Modal/Modal";

const article = {
	title: 'ok',
	intro: 'now',
	image: 'https://images.pexels.com/photos/2698727/pexels-photo-2698727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	text: 'ok'
}

class ArticleCreate extends React.Component {

	onSubmit = data => {
		console.log("data:", data);
		this.props.createArticles(data)
	};

	renderModal() {
		return <Modal />;
	}

	render() {
		return (
			<Aux>
				<HeroLogo />
				<ArticleForm onSubmit={this.onSubmit} />
			</Aux>
		);
	}
}

export default connect(
	null,
	{ createArticles }
)(ArticleCreate);
