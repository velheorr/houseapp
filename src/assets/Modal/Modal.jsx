import './Modal.scss'
import Button from "@mui/material/Button";


const Modal = () => {
    const modalData = useSelector(state => state.launches.modalData);
    const dispatch = useDispatch();

    // удаление элемента из моих полётов
/*    const deleteLaunch = () =>{
        dispatch(delMyLaunch(modalData.name))
        dispatch(switchModal())
    }*/

    return (
        <div className='modal'>
            <div className='modalContent'>
                <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
                    <div className='close' onClick={}>
                        <div>Cancel flight reservation?</div>
                        <IconButton><CloseIcon /></IconButton>
                    </div>
                    <CardContent>
                        <div className='title'>111</div>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color='error' onClick={}>Confirm</Button>
                        <Button size="small" onClick={}>Cancel</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default Modal;