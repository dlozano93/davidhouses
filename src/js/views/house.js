import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Modal } from "../component/modal";
import { HouseCard } from "../component/housecard";
import { Context } from "../store/appContext";

export const House = () => {
	const [state, setState] = useState({
		showModal: false,
		id: null
	});
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className=" col bg-warning text-center">
						{store.houses.map((item, index) => {
							return (
								<HouseCard
									onOpen={() => setState({ showModal: true })}
									key={index}
									index={index}
									name={item.post_title}
									address={item.address}
									price={item.price}
									rooms={item.rooms}
									baths={item.baths}
									rent={item.rent}
									sell={item.sell}
									image={item.image.sizes.medium}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />;
		</>
	);
};
