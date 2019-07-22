import React from "react";

//react-router-dom import for routing
import { Route, Switch } from "react-router-dom";

//Components 
import Home from './core/Home/Home'
import ArticleList from './core/Articles/ArticleList'
import ArticleCreate from './core/Articles/ArticleCreate'
import ArticleEdit from './core/Articles/ArticleEdit'

// Header and Footer Layout

import Layout from "./layout/Layout/Layout"


const MainRouter = props => {
	return (
		<Layout>
			<Switch>
				<Route exact path={'/'} component={Home} />
				<Route  path={'/articles'} component={ArticleList} />
				<Route path = {'/admin/create'} component={ArticleCreate} />
				<Route path = {'/admin/edit'} component={ArticleEdit} />
			</Switch>
		</Layout>
	);
};

export default MainRouter;
