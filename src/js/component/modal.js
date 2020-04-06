import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

export const Modal = props => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		//initialize state here
	});
	//

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<div className="row">
							<div className="col">
								<img className="img-thumbnail" src={rigoImage} alt="Card image cap" />
							</div>
							<div className="col">
								<h2>Price:</h2>
								<h2>Address:</h2>
								<h2>Rooms:</h2>
								<h2>Baths:</h2>
								<h2>Type:</h2>
								<h2>Sell:</h2>
								<h2>Rent:</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	onOpen: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.number
};

/**
 * Definr
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
