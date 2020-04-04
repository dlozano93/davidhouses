const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			houses: []
		},
		actions: {
			updateHouses: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/dlozano93")
					.then(resp => resp.json())
					.then(data => {
						setStore({ houses: data });
					});
			}
		}
	};
};

export default getState;
