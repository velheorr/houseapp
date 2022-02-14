import './Occupant.scss'
import {useDispatch, useSelector} from "react-redux";
import Box from "@mui/material/Box";
import OccupantCard from "./OccupantCard";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import {showModal} from "../../assets/Modal/ModalSlice";
import {useEffect} from "react";


const Occupant = () => {
	const dispatch = useDispatch();
	const occupantsData = useSelector(state => state.occupant.occupantsData);

	/*useEffect(()=>{
		renderOccupants(occupantsData)
	}, [occupantsData])*/

	const renderOccupants = (data)=>{
		if (data.clients) {
			console.log(data.clients)
			return  data.clients.map((item, i) => <OccupantCard key={i} item={item}/>)
		}
	}
	const occupants = renderOccupants(occupantsData)

	console.log(occupantsData)

	return (
		<div>
			<div>
				<span>Адрес такой то</span>

				<IconButton color="primary" style={{float: 'right'}} onClick={()=>dispatch(showModal(true))}><PersonAddAltIcon /></IconButton>
			</div>
			<Divider style={{margin: '15px 0'}}/>
			<div>
				<Box  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}  className=''>
					{
						occupants
							?
							occupants
							:
							<div className='noData'>Адрес не выбран или жильцов нет</div>
					}
				</Box>
			</div>
		</div>
	);
};

export default Occupant;