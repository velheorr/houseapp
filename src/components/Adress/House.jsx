import {useEffect, useState} from "react";
import './House.scss'
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import {api} from '../../api/api'
import {useDispatch, useSelector} from "react-redux";
import {optionsFlat, optionsHouse, optionsStreet, setOccupants} from './HouseSlice'
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


const House = () => {
	const [street, setStreet] = useState('');
	const [house, setHouse] = useState('');
	const [flat, setFlat] = useState('');
	const dispatch = useDispatch();
	const streetData = useSelector(state => state.house.streetData);
	const houseData = useSelector(state => state.house.houseData);
	const flatData = useSelector(state => state.house.flatData);

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
	useEffect(()=>{
		/*dataStreet()*/
	}, [])

	const dataStreet = async ()=>{
		dispatch(optionsStreet(await api.getStreet()))
	}
	const dataHouse = async (id)=>{
		dispatch(optionsHouse(await api.getHouse(id)))
	}
	const dataFlat = async (id)=>{
		dispatch(optionsFlat(await api.getFlat(id)))
	}


	const renderOptions = (data) =>{
		return data.map((item,i) => <MenuItem key={i} value={item.id}>{item.name}</MenuItem>)
	}

	const renderStreet = renderOptions(streetData);
	const renderHouse = renderOptions(houseData);
	const renderFlat = renderOptions(flatData);

	const getOcup = async (street, house, flatName)=>{
		const data = await api.getOccupants(street, house, flatName)
			/*.then(response => {
				dispatch(setOccupants(data.clients))
			})*/
		console.log(data)
		console.log(data.clients)
		dispatch(setOccupants(data.clients))

	}
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
				<Autocomplete
					id="free-solo-demo"
					freeSolo
					options={street || []}
					renderInput={(params) => <TextField {...params} label="Улица" />}
				/>
			</FormControl>

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