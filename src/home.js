import React, {Component} from "react";
import { 
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import App from './App';
import About from './about';
import Navbar from './navbaar';
import Contact from './contact';

const CustomRouters = ()=> (
	<Router>
	<div>
	<Navbar/>
	
	<Route exact path = '/' component = {App} />
	<Route path = '/about' component = {About} />
	<Route path = '/contact' component = {Contact} />

	</div>



	</Router>
	)

export default CustomRouters;




