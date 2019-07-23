import React from "react";
import styles from "./Signin.module.css";
import { connect } from "react-redux";
import { signIn} from "../../../actions";

import SignInForm from "../SignInForm/SignInForm";

class Signup extends React.Component {
	onSubmit = user => {
		this.props.signIn(user)
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
							<SignInForm onSubmit={this.onSubmit} />
						</div>
					</div>
				</div>
			</section>
		);
	}
}



export default connect(
	null,
	{ signIn}
)(Signup);
