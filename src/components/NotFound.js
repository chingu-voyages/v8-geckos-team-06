import React from 'react';
import {NavLink} from 'react-router-dom'
import '../App.css';

const NotFound = () => (
		<div className="container">
			<div>
				<div className="jumbotron jumbotron-fluid">
 					 <div className="container">
   						 <h1 className="display-4">Error 404 </h1>
    					<p className="lead">URL NOT FOUND</p>
    					<NavLink to="/">Back</NavLink>
  					</div>
				</div>
			</div>
		</div>
	)
export default NotFound;