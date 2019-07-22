import React from "react";
import styles from "./Signin.module.css";
import {connect} from 'react-redux'
// import auth from "../../../apis/auth/auth-helper";
// import { Redirect } from "react-router-dom";
// import { signin } from "../../../apis/auth/api-auth.js";
import {signIn} from '../../../actions'

import SignInForm from '../SignInForm/SignInForm'

class Signup extends React.Component {

	onSubmit = (user) => {
		console.log('user:',user)
		
		this.props.signIn(user)
		// signIn(user)
		// 	.then(data => {
		// 		if (data.error) {
		// 			this.setState({ error: data.error });
		// 		} else {
		// 			auth.authenticate(data, () => {
		// 				this.setState({ redirectToReferrer: true });
		// 			});
		// 		}
		// 	})
		// 	.catch(err => {
		// 		this.setState({ error: err });
		// 	});
	};

	render() {
		return (
			<section className={`section ${styles.Main}`}>
				<div className={` ${styles.Container}`}>
					<h1 className="title is-1 has-text-white">Admin</h1>
					<h2 className="subtitle is-3 has-text-white">
						Whats up BOSS
					</h2>
					<div className="columns">
						<div className="column is-10">
							<SignInForm onSubmit={this.onSubmit}/>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default connect(null,{signIn})(Signup);
