import React, { useState } from "react";
import NavItem from "./NavItem/NavItem";

const navPath = [
	{ link: "Home", path: "/" },
	{ link: "Articles", path: "/articles" },
	{ link: "About", path: "/about" }
];

const renderNavItem = () => {
	const item = navPath.map(go => {
		return <NavItem key={go.link} link={go.link} path={go.path} />;
	});
	return item;
};

const Nav = props => {
	const [active, setActive] = useState(false);

	return (
		<div className="container">
			<nav className="navbar is-transparent">
				<div className="navbar-brand">
					<div
						onClick={() => setActive(!active)}
						className={`navbar-burger burger ${
							active ? "is-active" : ""
						} `}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>

				<div
					onClick={() => setActive(!active)}
					className={`navbar-menu ${active ? "is-active" : ""} `}
				>
					<div className="navbar-end">{renderNavItem()}</div>
				</div>
			</nav>
		</div>
	);
};

// const Header = withRouter(({ history }) => <Nav history={history} />);

export default Nav;
