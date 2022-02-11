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
		const street = response.data.map(i => { return {id: i.id, name: i.name}})
		return street
	},
	async getHouse(id){
		let response
		try {
			response = await axios.get(`${baseURL}houses/${id}`);
			console.log(response)
		} catch (error) {
			console.error(error);
		}
		return response.data
	}
}