import './Occupant.scss'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const OccupantCard = () => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardContent className='card'>
                <div><PersonOutlineIcon/></div>
                <div>
                    <div>Иванов Иван Иванович</div>
                    <div className="green"><LocalPhoneIcon className='icon'/> 89026410747</div>
                    <div><MailOutlineIcon className='icon'/> velheorr@gmail.com</div>
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