import React from "react";
import { Field, reduxForm } from "redux-form";

class SignInForm extends React.Component {
	renderInput = ({ input, placeholder, type }) => {
		return (
			<input
				{...input}
				type={type}
				className="input"
				placeholder={placeholder}
			/>
		);
	};

	onSubmit = (data) =>{
		this.props.onSubmit(data)
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="container">
				<div className="field">
					<label className="label has-text-white">Name</label>
					<div className="control">
						<Field
							type="text"
							name="name"
							placeholder="admin"
							component={this.renderInput}
						/>
					</div>
				</div>
				<div className="field">
					<label className="label has-text-white">Password</label>
					<div className="control">
						<Field
							name="password"
							type="password"
							placeholder="xxxxxx"
							component={this.renderInput}
						/>
					</div>
				</div>
				<div className="field">
					<div className="control">
						<button className="button is-primary" onClick={this.props.handleSubmit(this.onSubmit)}>Submit</button>
					</div>
				</div>
			</form>
		);
	}
}

export default reduxForm({ form: "signin" })(SignInForm);
