import React from "react";
import styles from "./NavItem.module.css";
import { NavLink  } from "react-router-dom";

const navItem = props => {
	return (
		<NavLink  className={`navbar-item ${styles.Item} `} to={props.path} activeStyle={{ color: 'none' }}>
			<div className={styles.Inner}>{props.link}</div>
			<div className={styles.Outer}></div>
		</ NavLink >
	);
};

export default navItem;
