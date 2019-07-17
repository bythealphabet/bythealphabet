import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/core/Home'


const MainRouter = props => {
	return (
		
			<Switch>
				<Route exact path={'/'} component={Home} />
			</Switch>
		
	);
};

export default MainRouter;
