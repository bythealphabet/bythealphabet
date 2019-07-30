import React from "react";
import HeroLogo from '../../components/HeroLogo/HeroLogo'
import Heading from '../../components/Heading/Heading'
import ParaIntro from '../../components/Para/ParaIntro'
import Para from '../../components/Para/Para'
import ArticleImg from '../../components/ArticleImg/ArticleImg'
import {readArticle} from '../../actions'
import {connect} from 'react-redux'

class ArticleShow extends React.Component {
	
	componentDidMount(){
		this.init(this.props.match.params.id)
	}

	init = id => {
		this.props.readArticle(id)
	};

	render() {
		
		const article = this.props.article

		if(!article){
			return <h1 className="title is-4">Loading .... </h1>
		}
		return (
			<section className={`section  ${''} `}>
				<HeroLogo />
				<Heading>{article.title}</Heading>
				<ParaIntro>{article.intro}</ParaIntro>
				<ArticleImg alt={article.title}>{article.image}</ArticleImg>
				<Para>{article.text}</Para>
			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) =>{
	return {article: state.articles[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{readArticle})(ArticleShow);