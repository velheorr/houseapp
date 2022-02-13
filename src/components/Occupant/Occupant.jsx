import './Occupant.scss'
import {useDispatch, useSelector} from "react-redux";
import Box from "@mui/material/Box";
import OccupantCard from "./OccupantCard";


const Occupant = () => {
	const dispatch = useDispatch();
	const occupantsData = useSelector(state => state.house.occupantsData);



	return (
		<div>
			<div>
				Адрес такой то
			</div>
			<div>
				<Box  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}  className=''>
					<OccupantCard/>
					{
						occupantsData.length > 1
							?
							<OccupantCard/>
							:
							<div className='noData'>Адрес не выбран или жильцов нет</div>
					}
				</Box>
			</div>
		</div>
	);
};

export default Occupant;