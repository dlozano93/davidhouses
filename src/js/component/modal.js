import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

export const Modal = ({ index, onClose, onOpen, show }) => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		//initialize state here
	});
	//
	let item = index !== null ? store.houses[index] : {};

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{onClose ? (
							<button
								onClick={() => onClose()}
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
								<img
									className="img-thumbnail"
									src={index !== null && item.image.sizes.thumbnail}
									alt="Card image cap"
								/>
							</div>
							<div className="col">
								<p>{"Price: " + item.price}</p>
								<p>{"Address: " + item.address}</p>
								<p>{"Rooms: " + item.rooms}</p>
								<p>{"Baths: " + item.baths}</p>
								<p>{"Sell: " + item.sell}</p>
								<p>{"Rent: " + item.rent}</p>
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
	onClose: PropTypes.func,
	onOpen: PropTypes.func,
	show: PropTypes.bool,
	index: PropTypes.number
};

/**
 * Definr
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
