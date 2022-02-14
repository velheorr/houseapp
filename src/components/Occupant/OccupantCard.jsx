import './Occupant.scss'
import {Button, ButtonGroup, CardActions, CardContent, Card} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {showModal} from "../../assets/Modal/ModalSlice";
import {useDispatch} from "react-redux";


const OccupantCard = ({item}) => {
    const {id, name, phone, email} = item;
    const dispatch = useDispatch()
    const openModal = ()=>{
        dispatch(showModal(true))
    }

    return (
        <Card sx={{ width: 300, display: 'inline-grid', margin: 1}}>
            <CardContent className='card'>
                <div><PersonOutlineIcon color='primary'/></div>
                <div>
                    <div>{name}</div>
                    <div className="green"><LocalPhoneIcon className='icon'/> {phone}</div>
                    <div><MailOutlineIcon className='icon'/> {email}</div>
                </div>
            </CardContent>
            <CardActions>
                <ButtonGroup variant="text" className='btnGroup'>
                    <Button><DeleteOutlineIcon /></Button>
                    <Button onClick={openModal}><EditIcon /></Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    );
};

export default OccupantCard;