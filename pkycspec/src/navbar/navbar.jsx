import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const HomeBar = () => {
    const navigate = useNavigate()
    return(
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                API Spec List
            </Typography>
            <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
            </Toolbar>
        </AppBar>
    )
}

export default HomeBar