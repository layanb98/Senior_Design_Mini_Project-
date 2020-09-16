import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SignUp from './SignUp'
import ReactDOM from 'react-dom';
import {db_Logout} from './DatabaseManager';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function Logout(){
    db_Logout();
    ReactDOM.render(<SignUp />, document.getElementById('root'));
}

const ButtonAppBar = () => {
    const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            Info
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <Button 
          id="execute-request-button"
          onClick = {Logout}
          color="inherit">
          Sign Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default ButtonAppBar;