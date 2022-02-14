const axios = require('axios');
const baseURL = 'https://dispex.org/api/vtest/'

export const api = {
	// получение обьекта с улицами
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
	// получение обьекта с домами
	async getHouse(id) {
		try {
			const response = await axios.get(`${baseURL}Request/houses/${id}`);
			return response.data
		} catch (error) {
			console.error(error);
		}
	},
	// получение обьекта с квартирами
	async getFlat(id) {
		try {
			const response = await axios.get(`${baseURL}Request/house_flats/${id}`);
			const onlyFlat = response.data.filter(i => i.typeId === 3)
			return onlyFlat
		} catch (error) {
			console.error(error);
		}
	},
	// получение обьекта с жителями
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
	// получение жителя по его телефону, для модального окна, редактировать инф. жителя
	async getClient(phone) {
		try {
			const response = await axios.get(`${baseURL}HousingStock/client?phone=${phone}`);
			return {email: response.data.email, name: response.data.name, phone: response.data.phone, id: response.data.id}
		} catch (error) {
			console.error(error);
		}
	},
	// добавление нового жителя
	async postClient(data){
		try {
			await axios.post(`${baseURL}HousingStock/client`, data);
		} catch (error) {
			console.error(error);
		}
	},
	// обновление инф. о жителе
	async updateClient(data){
		try {
			await axios.put(`${baseURL}HousingStock/bind_client`, data);
		} catch (error) {
			console.error(error);
		}
	},
	// удаление жителя
	async deleteClient(id){
		try {
			await axios.delete(`${baseURL}HousingStock/bind_client/${id}`);
		} catch (error) {
			console.error(error);
		}
	}
}
