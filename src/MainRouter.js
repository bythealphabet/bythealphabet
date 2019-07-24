import React from "react";

//react-router-dom import for routing
import { Route, Switch } from "react-router-dom";

// Private Routes

import PrivateRoute from './core/Admin/PrivateRoute'

//Components 
import Home from './core/Home/Home'
import Signin from './core/Admin/Signin/Signin'
import ArticleList from './core/Articles/ArticleList'
import ArticleCreate from './core/Articles/ArticleCreate'
import ArticleEdit from './core/Articles/ArticleEdit'
import ArticleShow from './core/Articles/ArticleShow'

// Header and Footer Layout
import Layout from "./layout/Layout/Layout"


const MainRouter = props => {
	return (
		<Layout>
			<Switch>
				<Route exact path={'/'} component={Home} />
				<Route  path={'/articles'} component={ArticleList} />
				<Route path={'/signin'} component={Signin} />
				<PrivateRoute path="/admin/create" component={ArticleCreate} />
				<PrivateRoute path="/admin/edit/:articleId" component={ArticleEdit}/>
				<Route path={'/article/:articleId'} component={ArticleShow} />
			</Switch>
		</Layout>
	);
};

export default MainRouter;
