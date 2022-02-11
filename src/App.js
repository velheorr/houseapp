
import './App.scss';
import House from "./components/Adress/House";
import Occupant from "./components/Occupant/Occupant";
import Paper from "@mui/material/Paper";


const App =()=> {

  return (
    <Paper className='wrapper'>
       <House/>
       <Occupant/>
    </Paper>
  );
}

export default App;
