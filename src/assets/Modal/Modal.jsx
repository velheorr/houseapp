import './Modal.scss'
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Divider from "@mui/material/Divider";
import {showModal} from "./ModalSlice";
import {useDispatch} from "react-redux";
import TextField from "@mui/material/TextField";

const Modal = () => {
    const dispatch = useDispatch()


    return (
        <div className='modal'>
            <div className='modalContent'>
                <Card sx={{ maxWidth: 500, margin: '0 auto' }}>
                    <div className='close' >
                        <div><PersonOutlineIcon color='primary' className='icon'/> Добавить жильца</div>
                        <IconButton onClick={()=> dispatch(showModal(false))}><CloseIcon /></IconButton>
                    </div>
                    <Divider style={{margin: 5}}/>
                    <CardContent>
                        <div className='fields'>
                            <TextField label="Телефон" />
                            <TextField label="E-mail" />
                            <TextField label="Ф.И.О." />
                        </div>
                    </CardContent>
                    <Divider style={{margin: 5}}/>
                    <CardActions style={{float:'right'}}>
                             <Button size="small" variant="outlined" onClick={()=> dispatch(showModal(false))}>Отменить</Button>
                            <Button size="small" variant="outlined" >Добавить</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default Modal;