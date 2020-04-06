import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";

export const HouseCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	return (
		<div
			className="
								d-inline-block
								border
								bg-light
								
								rounded-sm
                                py-2
                                px-2
								my-5
								mx-5
								 text-center">
			<h2>{props.name}</h2>
			<br />
			<img className="img-thumbnail" src={props.image} alt="Card image cap" />
			<br />
			<span>{"Address: " + props.address}</span>
			<br />
			<span>{"Price: " + props.price}</span>
			<br />
			<div className="btn btn-info" onClick={() => props.onOpen()}>
				{"More info"}
			</div>
		</div>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
HouseCard.propTypes = {
	history: PropTypes.object,
	onOpen: PropTypes.func,
	price: PropTypes.price,
	address: PropTypes.address,
	index: PropTypes.number,
	name: PropTypes.name,
	image: PropTypes.image
};

/**
 * Define the default values for
 * your component's properties
 **/
HouseCard.defaultProps = {};
