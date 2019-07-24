import React from "react";
import styles from "./Para.module.css";
import parse from 'html-react-parser'

const para = props => {
	return (
		<section className={` ${styles.Section} `}>
			<div className={` ${styles.Container} `}>
				<div className="content">{parse(`${props.children}`)}</div>
			</div>
		</section>
	);
};

export default para;
