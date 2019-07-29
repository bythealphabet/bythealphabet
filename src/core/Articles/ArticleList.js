import React from "react";
import { connect } from "react-redux";
import { fetchArticles} from "../../actions";

import HeroLogo from "../../components/HeroLogo/HeroLogo";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

class ArticlesList extends React.Component {
	componentDidMount() {
		this.props.fetchArticles();
	}

	renderAdminButtons = () => {
		return(
			<div className="buttons">
				<button className="button is-warning">edit</button>
				<button className="button is-danger">X</button>
			</div>
		)
	};

	render() {
		if (!this.props.articles) {
			return <div>Loading .....</div>;
		}

		return (
			<section className="section">
				<HeroLogo />
				<div className="section">
					<div className="container">
						<div className="columns is-multiline">
							{this.props.articles.map(i => {
								console.log('id:',i._id)
								return (
									<div className="column is-4" key={i._id}>
										<ArticleCard
											title={i.title}
											intro={i.intro}
											image={i.image}
											path={`/article/${i._id}`}

										>{this.props.allowed ? this.renderAdminButtons() : null}</ArticleCard>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		articles: Object.values(state.articles),
		allowed: state.auth.isSignedIn
	};
};

export default connect(
	mapStateToProps,
	{ fetchArticles }
)(ArticlesList);
