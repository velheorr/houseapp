import './Occupant.scss'
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";


const Occupant = () => {
	const dispatch = useDispatch();
	const occupantsData = useSelector(state => state.house.occupantsData);
	return (
		<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}  className=''>
			{
				occupantsData.length > 1 ? <div>1111</div> : 'Адрес не выбран или жильцов нет'
			}
		</Grid>
	);
};

export default Occupant;