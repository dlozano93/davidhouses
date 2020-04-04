import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Modal } from "../component/modal";
import { HouseCard } from "../component/housecard";

export const House = () => {
	const [state, setState] = useState({
		showModal: false,
		id: null
	});

	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-1 bg-success" />
					<div className=" col bg-warning text-center">
						<HouseCard onClick={() => setState({ showModal: true })} />
						<HouseCard />
					</div>
					<div className="col-sm-1 bg-danger" />
				</div>
			</div>
		</>
	);

	<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />;
};
