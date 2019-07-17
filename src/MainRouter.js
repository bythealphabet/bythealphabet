import React from "react";

//react-router-dom import for routing
import { Route, Switch } from "react-router-dom";

//Components 
import Home from './core/Home/Home'
import ArticleList from './core/Articles/ArticleList'

// Header and Footer Layout

import Layout from "./layout/Layout/Layout"


const MainRouter = props => {
	return (
		<Layout>
			<Switch>
				<Route exact path={'/'} component={Home} />
				<Route  path={'/articles'} component={ArticleList} />
			</Switch>
		</Layout>
	);
};

export default MainRouter;
