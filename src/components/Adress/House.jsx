import {useEffect, useState} from "react";
import './House.scss'
import {Box, FormControl, Select, MenuItem, InputLabel, Button, Divider} from "@mui/material";
import {api} from '../../api/api'
import {useDispatch, useSelector} from "react-redux";
import {optionsFlat, optionsHouse, optionsStreet} from './HouseSlice'
import {setOccupants} from "../Occupant/OccupantSlice";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


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
	const handleChange = (value) => {
		console.log(value)
		setStreet(value);
			dataHouse(value.id);
			setHouse('');
			setFlat('');
	}

	const handleChange2 = (e, setSelect, id) => {
		setSelect(e.target.value);
		if (id === 'house'){
			dataFlat(e.target.value);
			setFlat('');
		}
		if (id === 'flat'){
			const flatName = flatData.find(i => i.id === e.target.value);
			getOcup(street.id, house, flatName.flat);
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

	//ф-и рендера опций селекта
	const renderOptions = (data) =>{
		return data.map((i) => {
			return {label: i.name , id: i.id}
		})
	}
	const renderOptions2 = (data) =>{
		return data.map((item,i) => <MenuItem key={i} value={item.id}>{item.name}</MenuItem>)
	}


	// рендер всех селектов
	const renderStreet = renderOptions(streetData);
	const renderHouse = renderOptions2(houseData);
	const renderFlat = renderOptions2(flatData);

	/*const renderStreet2 = renderOptions2(streetData)*/

	// получение жителей
	const getOcup = async (street, house, flat)=>{
		dispatch(setOccupants(await api.getOccupants(street, house, flat)))
	}

	// временная кнопка для тестирования (загружает улицу и дом - Федюнинского 30)
	const setData = ()=>{
		setStreet({label: 'Федюнинского' , id: 134});
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
			<FormControl>
				<Autocomplete
					disablePortal
					id="street"
					options={renderStreet}
					value={street}
					sx={{ width: 250 }}
					renderInput={(params) => <TextField {...params} label="Улица" />}
					onChange={(e,value )=> handleChange(value)}
				/>
			</FormControl>
			<FormControl sx={{ width: 150 }} >
				<InputLabel id="house">Дом</InputLabel>
				<Select
					labelId="house"
					id="house-select"
					value={house}
					label="Дом"
					onChange={(e)=> handleChange2(e, setHouse, 'house')}
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
					onChange={(e)=> handleChange2(e, setFlat, 'flat')}
				>
					{renderFlat}
				</Select>
			</FormControl>
			<Button onClick={setData} variant="contained" style={{float: 'right'}}>Федюнинского 30</Button>
		</Box>
	);
};

export default House;