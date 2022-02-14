import './Occupant.scss'
import {Button, ButtonGroup, CardActions, CardContent, Card} from "@mui/material";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const OccupantCard = ({item}) => {
    console.log(item)
    const {id, name, phone, email} = item;
    return (
        <Card sx={{ maxWidth: 300 }}>
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
                    <Button> <DeleteOutlineIcon /></Button>
                    <Button> <EditIcon /></Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    );
};

export default OccupantCard;