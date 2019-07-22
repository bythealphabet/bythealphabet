import React from "react";
import { Field, reduxForm } from "redux-form";

class ArticleForm extends React.Component {
	renderInput({input, meta, placeholder}) {
		return (
			<div className="field">
				<input {...input} className={`input is-large`} placeholder={placeholder} />
			</div>
		);
	}

	renderTextArea({input, meta, placeholder}) {
		return (
			<div className="field">
				<textarea {...input} className="textarea" placeholder={placeholder} rows={10}></textarea>
			</div>
		);
	}

	onSubmit = (data) => {
		console.log("data:", data);
		this.props.onSubmit(data);
	}

	render() {
		return (
			<section className={`section`}>
				<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<Field name="title" component={this.renderInput} placeholder={'TITLE'} />
					<Field name="intro" component={this.renderTextArea} placeholder={'INTRO'} />
					<Field name="image" component={this.renderInput} placeholder={'IMAGE'} />
					<Field name="text" component={this.renderTextArea} placeholder={'TEXT'} />
					<div className="control">
						<div className="button is-primary" onClick={this.props.handleSubmit(this.onSubmit)}>CREATE</div>
					</div>
				</form>
			</section>
		);
	}
}

export default reduxForm({ form: "articleForm"})(ArticleForm);
