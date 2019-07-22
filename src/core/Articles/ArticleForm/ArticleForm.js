import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from 'react-router-dom'
import HeroLogo from "../../../components/HeroLogo/HeroLogo";
import Heading from "../../../components/Heading/Heading";
import ArticleImg from "../../../components/ArticleImg/ArticleImg";
import TextArea from "../../../components/TextAreaArticle/TextAreaArticle";
import Input from '../../../components/Input/Input'

class ArticleForm extends React.Component {
	renderInput(input) {
		return <Input {...input}/>;
	}

	renderTextArea(input){

		return <TextArea {...input}  />
	}

	submitHandler(data){
		this.props.onSubmit(data)
	}

	render() {
		// console.log('this.props:',this.props)
		return (
			<section className={`section`}>
				<HeroLogo />

				<form  onSubmit={this.props.handleSubmit(this.submitHandler)}>
				<Heading>
					<Field name="title" component={this.renderInput} />
				</Heading>
						
						{/*  input title  */}
					<Field name="intro" component={this.renderTextArea}  />
					<ArticleImg alt={' '}>
						{'https://images.pexels.com/photos/1133505/pexels-photo-1133505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
					</ArticleImg>
					<Field name="image" component={this.renderInput} />
					<Field name="text"  component={this.renderTextArea} />
					<div className="field">
						<div className="button is-primary" onClick={this.props.onSubmit}>
							CREATE
						</div>
					</div>
					
				</form>
				<Link
					to={"/articles"}
					className={`modal ${ false ? "is-active" : ""}`}
				>
					<div className={`modal-background  `}></div>
					<div className={`modal-content hero `}>
						<div className={`box has-text-centered `}>
							<div>
								<h2 className="title is-1">
									{`Article made `}
								</h2>
								<h3 className={`subtitle is-3 has-text-link `}>
									Welcome to the List
								</h3>
								<p>{}</p>
							</div>
						</div>
					</div>
				</Link>
			</section>
		);
	}
}

export default reduxForm({form: "articleForm"})(ArticleForm);
