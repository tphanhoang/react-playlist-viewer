import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

import App from "./App"
import PageHome from "PageHome"
import PageSearch from "PageSearch"

export default class Routes extends Component {

	render() {
		return (
			<Router history={browserHistory}>
			 <Route path="/" component={App}>
			 	<Route path="home" component={PageHome} />
			 	<Route path="search" component={PageSearch} />
			 </Route>
			</Router>
		)
	} 
}