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
	},
	async getClient(phone) {
		try {
			const response = await axios.get(`${baseURL}HousingStock/client?phone=${phone}`);
			return {email: response.data.email, name: response.data.name, phone: response.data.phone, id: response.data.id}
		} catch (error) {
			console.error(error);
		}
	},
	async postClient(data){
		try {
			await axios.post(`${baseURL}HousingStock/client`, data);
		} catch (error) {
			console.error(error);
		}
	},
	async updateClient(data){
		try {
			await axios.put(`${baseURL}HousingStock/bind_client`, data);
		} catch (error) {
			console.error(error);
		}
	},
	async deleteClient(id){
		try {
			await axios.delete(`${baseURL}HousingStock/bind_client/${id}`);
		} catch (error) {
			console.error(error);
		}
	}
}
