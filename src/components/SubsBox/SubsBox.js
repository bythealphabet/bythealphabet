import React from "react";
import styles from "./SubsBox.module.css";
import Aux from '../../hoc/_Aux'

const Input = ({placeholder}) => {
	return (
		<div className="field">
			<div className="control">
				<input
					className="input"
					type="text"
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

const SubsBox = props => {
	return (
		<Aux>

			<div className={styles.Container}>
				<h3 className=""> Hangout with us </h3>
				<div className={styles.InputForm}>
					<Input placeholder={'Name'} />
					<Input placeholder={'E-mail'} />
				</div>
			</div>
		</Aux>
		
	);
};

export default SubsBox;
