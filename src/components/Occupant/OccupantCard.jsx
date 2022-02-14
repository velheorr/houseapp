import './Occupant.scss'
import {Button, ButtonGroup, CardActions, CardContent, Card} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {dataForModal, showModal} from "../../assets/Modal/ModalSlice";
import {useDispatch} from "react-redux";
import {api} from '../../api/api'

const OccupantCard = ({item}) => {
    const {id, name, phone, email} = item;
    const dispatch = useDispatch()

    // открытие модального окна и получение данных для редактирования жителя
    const openModal = ()=>{
        api.getClient(phone)
            .then(res => {
                dispatch(dataForModal(res))
                dispatch(showModal(true))
            })
    }

    // удаление жителя по id
    const onDelete = ()=>{
        api.deleteClient(id)
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
                    <Button onClick={onDelete}><DeleteOutlineIcon /></Button>
                    <Button onClick={openModal}><EditIcon /></Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    );
};

export default OccupantCard;