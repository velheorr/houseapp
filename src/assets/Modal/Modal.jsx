import './Modal.scss'
import {Button, Card, IconButton, CardContent, CardActions, Divider} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import {dataForModal, showModal} from "./ModalSlice";
import {useDispatch, useSelector} from "react-redux";
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import {api} from '../../api/api'


const Modal = () => {
    const dispatch = useDispatch()
    const occupantsAdress = useSelector(state => state.occupant.occupantsAdress);
    const addressId = useSelector(state => state.occupant.addressId);
    const data = useSelector(state => state.modal.data);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const onSubmit = clientData =>{
        if (data){
            api.updateClient({AddressId: addressId, ClientId: data.id})
        } else {
            api.postClient(clientData)
        }
        dispatch(showModal(false))
        dispatch(dataForModal(''))
    };

    // заполнение инпутов, если выбрано редактирование
    if (data){
        setValue('Name', data.name);
        setValue('Phone', data.phone);
        setValue('Email', data.email);
    }

    // закрытие и очистка модального окна
    const closeModal = ()=>{
        dispatch(showModal(false))
        dispatch(dataForModal(''))
    }


    return (
        <div className='modal'>
            <div className='modalContent'>
                <Card sx={{ maxWidth: 500, margin: '0 auto' }}>
                    <div className='close' >
                        <div><PersonOutlineIcon color='primary' className='icon'/> Добавить жильца</div>
                        <IconButton  onClick={closeModal}><CloseIcon /></IconButton>
                    </div>
                    <Divider style={{margin: 5}}/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent>
                            <div className='adress'>{occupantsAdress}</div>
                            <div className='fields'>
                                <TextField size='small' sx={{width :233}} label="Телефон*" {...register("Phone",{ required: true})} error={!!errors.Name}/>
                                <TextField size='small' sx={{width :233}} label="E-mail" {...register("Email")}/>
                                <TextField size='small' fullWidth label="Ф.И.О." {...register("Name")}/>
                            </div>
                        </CardContent>
                        <Divider style={{margin: 5}}/>
                        <CardActions style={{float:'right'}}>
                            <Button size="small" variant="outlined" onClick={closeModal}>Отменить</Button>
                            <Button size="small" variant="outlined" type="submit">Добавить</Button>
                        </CardActions>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Modal;