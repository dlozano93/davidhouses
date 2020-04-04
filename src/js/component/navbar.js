import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar sticky-top navbar-dark bg-dark">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">{"David's Houses"}</span>
			</Link>
			<div className="row">
				<Link to="/houses">
					<button className="btn btn-outline-light mx-1">Houses</button>
				</Link>
				<Link to="/about">
					<button className="btn btn-outline-light mx-1">{"About us!"}</button>
				</Link>
			</div>
		</nav>
	);
};
