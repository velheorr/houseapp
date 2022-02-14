import {useEffect, useState} from "react";
import './House.scss'
import {Box, FormControl, Select, MenuItem, InputLabel, Button, Divider} from "@mui/material";
import {api} from '../../api/api'
import {useDispatch, useSelector} from "react-redux";
import {optionsFlat, optionsHouse, optionsStreet} from './HouseSlice'
import {setOccupants} from "../Occupant/OccupantSlice";


const House = () => {
	// стейт для работы селектов
	const [street, setStreet] = useState('');
	const [house, setHouse] = useState('');
	const [flat, setFlat] = useState('');

	const dispatch = useDispatch();
	const streetData = useSelector(state => state.house.streetData);
	const houseData = useSelector(state => state.house.houseData);
	const flatData = useSelector(state => state.house.flatData);

	// ф-я получает какой селект изменить и ф-ю стейта
	const handleChange = (e, setSelect, id) => {
		setSelect(e.target.value);
		if (id === 'street'){
			dataHouse(e.target.value);
			setHouse('');
			setFlat('');
		}
		if (id === 'house'){
			dataFlat(e.target.value);
			setFlat('');
		}
		if (id === 'flat'){
			const flatName = flatData.find(i => i.id === e.target.value);
			getOcup(street, house, flatName);
		}
	};
	// первоначальная загрузка данных первого селекта
	useEffect(()=>{
		dataStreet()
	}, [])

	// получение обьекта улиц
	const dataStreet = async ()=>{
		dispatch(optionsStreet(await api.getStreet()))
	}
	// получение обьекта домов
	const dataHouse = async (id)=>{
		dispatch(optionsHouse(await api.getHouse(id)))
	}
	// получение обьекта квартир
	const dataFlat = async (id)=>{
		dispatch(optionsFlat(await api.getFlat(id)))
	}

	//ф-я рендера опций селекта
	const renderOptions = (data) =>{
		return data.map((item,i) => <MenuItem key={i} value={item.id}>{item.name}</MenuItem>)
	}

	// рендер всех селектов
	const renderStreet = renderOptions(streetData);
	const renderHouse = renderOptions(houseData);
	const renderFlat = renderOptions(flatData);

	// получение жителей
	const getOcup = async (street, house, flatName)=>{
		dispatch(setOccupants(await api.getOccupants(street, house, flatName)))
	}

	// временная кнопка для тестирования (загружает улицу и дом - Федюнинского 30)
	const setData = ()=>{
		setStreet(134);
		dataHouse(134).then()
		setTimeout(()=>{
			setHouse(294);
			dataFlat(294);
			setFlat('');
		}, 1000)
	}


	return (
		<Box className='box'>
			<p><span className='red'>*</span>Адрес</p>
			<Divider style={{margin: '15px 0'}}/>
			<FormControl sx={{ width: 250 }} >
				<InputLabel id="street">Улица</InputLabel>
				<Select
					labelId="street"
					id="street-select"
					value={street}
					label="Улица"
					onChange={(e)=> handleChange(e, setStreet, 'street')}
				>
					{renderStreet}
				</Select>
			</FormControl>
			<FormControl sx={{ width: 150 }} >
				<InputLabel id="house">Дом</InputLabel>
				<Select
					labelId="house"
					id="house-select"
					value={house}
					label="Дом"
					onChange={(e)=> handleChange(e, setHouse, 'house')}
				>
					{renderHouse}
				</Select>
			</FormControl>
			<FormControl sx={{ width: 150 }} >
				<InputLabel id="flat">Кв./офис</InputLabel>
				<Select
					labelId="flat"
					id="flat-select"
					value={flat}
					label="Квартира"
					onChange={(e)=> handleChange(e, setFlat, 'flat')}
				>
					{renderFlat}
				</Select>
			</FormControl>
			<Button onClick={setData} variant="contained" style={{float: 'right'}}>Федюнинского 30</Button>
		</Box>
	);
};

export default House;