const axios = require('axios');

const baseURL = 'https://dispex.org/api/vtest/Request/'

export const api = {
	async getStreet() {
		let response
		try {
			response = await axios.get(`${baseURL}streets?cityId=1`);
		} catch (error) {
			console.error(error);
		}
		return response.data.map(i => { return {id: i.id, name: i.name}})
	},
	async getHouse(id){
		let response
		try {
			response = await axios.get(`${baseURL}houses/${id}`);
		} catch (error) {
			console.error(error);
		}
		return response.data
	},
	async getFlat(id){
		let response
		try {
			response = await axios.get(`${baseURL}house_flats/${id}`);
			console.log(response)
		} catch (error) {
			console.error(error);
		}
		return response.data
	}
}