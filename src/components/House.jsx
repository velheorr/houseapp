import {useEffect, useState} from "react";
import './House.scss'
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import {api} from '../api/api'
import {useDispatch, useSelector} from "react-redux";
import {optionsHouse, optionsStreet} from './HouseSlice'


const House = () => {
	const [street, setStreet] = useState('');
	const [house, setHouse] = useState('');
	const [flat, setFlat] = useState('');
	const dispatch = useDispatch()
	const streetData = useSelector(state => state.house.streetData);
	const houseData = useSelector(state => state.house.houseData);

	const handleChange = (e, setSelect, id) => {
		setSelect(e.target.value);
		if (id === 'street'){
			dataHouse(e.target.value)
			setHouse('')
		}
	};
	useEffect(()=>{
		dataStreet()
	}, [])

	const dataStreet = async ()=>{
		const data = await api.getStreet()
		dispatch(optionsStreet(data))
	}

	const renderOptions = (data) =>{
		return data.map((item,i) => <MenuItem key={i} value={item.id}>{item.name}</MenuItem>)
	}

	const renderStreet = renderOptions(streetData)
	const renderHouse = renderOptions(houseData)


	const dataHouse = async (id)=>{
		const data = await api.getHouse(id)
		dispatch(optionsHouse(data))
	}

	return (
		<Box className='box'>
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
					onChange={(e)=> handleChange(e, setHouse)}
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
					onChange={(e)=> handleChange(e, setFlat)}
				>

				</Select>
			</FormControl>
		</Box>
	);
};

export default House;