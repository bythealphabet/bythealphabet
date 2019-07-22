import React from "react";
import HeroLogo from "../../../components/HeroLogo/HeroLogo";
import Heading from "../../../components/Heading/Heading";
import ArticleImg from "../../../components/ArticleImg/ArticleImg";
import TextArea from "../../../components/TextAreaArticle/TextAreaArticle";
import Input from "../../../components/Input/Input";

class ArticleForm extends React.Component {


	onSubmit(data) {
		console.log("data:", data);
		this.props.onSubmit(data);
	}

	render() {
		console.log('this.props:',this.props)
		return (
			<section className={`section`}>
				<HeroLogo />

				<form onSubmit={this.onSubmit}>
					<Heading>
						<Input/>
					</Heading>

					<TextArea  />
					<ArticleImg alt={" "}>
						{
							"https://images.pexels.com/photos/1133505/pexels-photo-1133505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						}
					</ArticleImg>
					<Input  />
					<TextArea />
					<div className="field">
						<div className="button is-primary">CREATE</div>
					</div>
				</form>
			</section>
		);
	}
}


// const validate = data => {
// 	const errors = {};

// 	if (!data.title) {
// 		errors.title = "You must enter a Title";
// 	}

// 	if (!data.intro) {
// 		errors.description = "You must enter a Description";
// 	}

// 	return errors;
// };

export default ArticleForm;
