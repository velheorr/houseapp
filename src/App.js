
import './App.scss';
import House from "./components/Adress/House";
import Occupant from "./components/Occupant/Occupant";
import Paper from "@mui/material/Paper";
import Modal from "./assets/Modal/Modal";
import {useSelector} from "react-redux";


const App =()=> {
    const modal = useSelector(state => state.modal.show);

  return (
    <Paper className='wrapper'>
       <House/>
       <Occupant/>
        {modal? <Modal/> : ''}
    </Paper>
  );
}

export default App;
