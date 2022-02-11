const axios = require('axios');

const baseURL = 'https://dispex.org/api/vtest/Request/'

export const api = {
	async getStreet() {
		try {
			const response = await axios.get(`${baseURL}streets?cityId=1`);
			return response.data.map(i => { return {id: i.id, name: i.name}})
		} catch (error) {
			console.error(error);
		}
	},
	async getHouse(id){
		try {
			const response = await axios.get(`${baseURL}houses/${id}`);
			return response.data
		} catch (error) {
			console.error(error);
		}
	},
	async getFlat(id){
		try {
			const response = await axios.get(`${baseURL}house_flats/${id}`);
			const onlyFlat = response.data.filter(i => i.typeId === 3)
			return onlyFlat
		} catch (error) {
			console.error(error);
		}
	},
	async getOccupants(data){
		/*try {
			const response = await axios.get(`${baseURL}HousingStock?companyId=1&streetId=${id}&houseId=${id}`);
			return response.data
		} catch (error) {
			console.error(error);
		}*/
	}
