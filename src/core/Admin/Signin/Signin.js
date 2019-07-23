import React from "react";
import styles from "./Signin.module.css";
import { signin} from "../../../apis/auth/api-auth";
import auth from "../../../apis/auth/auth-helper";
import history from '../../../history'

import SignInForm from "./SignInForm/SignInForm";

class SignIn extends React.Component {

	onSubmit = user => {
		signin(user).then(data=>{
			if(data.error){
				return console.log('error:',data.error)
			}else{
				auth.authenticate(data, ()=> this.redirect())
			}	
		})
	};

	redirect = () => {
		window.location.reload()
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



export default SignIn
