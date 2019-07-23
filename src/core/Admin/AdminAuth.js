import React from "react";
import history from "../../history";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
import auth from "../../apis/auth/auth-helper";

class byTheAlphabet extends React.Component {
	componentDidMount() {
		this.auth = auth.isAuthenticated();
		this.onAuthChange(this.auth);
	}

	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(this.auth.admin._id);
		} else {
			this.props.signOut();
		}
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null || this.props.isSignedIn === false) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button className="button" onClick={this.handleSignOut}>
					Sign Out
				</button>
			);
		}
	}

	redirect = () => {
		window.location.reload();
		history.push("/");
	};

	handleSignOut = () => {
		auth.signout(() => this.redirect());
	};

	render() {
		return <div className="navbar-item">{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
	mapStateToProps,
	{ signIn, signOut }
)(byTheAlphabet);
