import React from "react";
import ArticleForm from "./ArticleForm/ArticleForm";
import HeroLogo from "../../components/HeroLogo/HeroLogo";
import { connect } from "react-redux";
import { createArticles } from "../../actions";
import Aux from "../../hoc/_Aux";
import Modal from "../../components/Modal/Modal";

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
