const axios = require('axios');

const baseURL = 'https://dispex.org/api/vtest/'

export const api = {
	async getStreet() {
		try {
			const response = await axios.get(`${baseURL}Request/streets?cityId=1`);
			return response.data.map(i => {
				return {id: i.id, name: i.name}
			})
		} catch (error) {
			console.error(error);
		}
	},
	async getHouse(id) {
		try {
			const response = await axios.get(`${baseURL}Request/houses/${id}`);
			return response.data
		} catch (error) {
			console.error(error);
		}
	},
	async getFlat(id) {
		try {
			const response = await axios.get(`${baseURL}Request/house_flats/${id}`);
			const onlyFlat = response.data.filter(i => i.typeId === 3)
			return onlyFlat
		} catch (error) {
			console.error(error);
		}
	},
	async getOccupants(street, house, flatName) {
		try {
			const response = await axios.get(`${baseURL}HousingStock?companyId=1&streetId=${street}&houseId=${house}`);
			const searchData = response.data.filter(item => {
				return item.streetId === street && item.houseId === house && item.flat === flatName.flat
			})
			return searchData[0]
		} catch (error) {
			console.error(error);
		}
	}
}
