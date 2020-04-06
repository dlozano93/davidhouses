const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			houses: []
		},
		actions: {
			updateHouses: () => {
				fetch(
					"https://8080-e7268af3-2177-4ca9-9b28-5755ebe4d1cd.ws-us02.gitpod.io/wp-json/sample_api/v1/houses"
				)
					.then(resp => resp.json())
					.then(data => {
						setStore({ houses: data });
						console.log(data);
					});
			}
		}
	};
};

export default getState;
