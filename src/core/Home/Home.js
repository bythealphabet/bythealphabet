import React from "react";
import styles from "./Home.module.css";
import HeroLogo from "../../components/HeroLogo/HeroLogo";
import FrontPage from "../../components/FrontPage/FrontPage";
import SlidingButton from "../../components/buttons/SlidingButton/SlidingButton";
import SubsBox from "../../components/SubsBox/SubsBox";

const pagesArray = [
	{ name: "Articles", path: "/articles" },
	{ name: "Web Developer's path", path: "/developer-path" },
	// {name: "Learn HTML", path: "/learn-html"},
	{ name: "My Gallery", path: "/gallery" },
	{ name: "Book Case", path: "/book-case" }
	// {name: "Games", path:"/games"},
];

const renderButtons = () => {
	const buttons = pagesArray.map(i => {
		return (
			<SlidingButton
				key={i.name.toString()}
				name={i.name}
				path={i.path}
			/>
		);
	});
	return buttons;
};

const renderSubsBox = () => {
	return <SubsBox />;
};

const Home = props => {
	const index = true;
	return (
		<div className={` ${styles.Container}  `}>
	<div className={styles.ContainerBckgr}></div>
	<div className={styles.SectionBckgr}><HeroLogo pages={index} /></div>
			
			
			<FrontPage right={renderButtons()} left={renderSubsBox()} />
		</div>
	);
};

export default Home;
