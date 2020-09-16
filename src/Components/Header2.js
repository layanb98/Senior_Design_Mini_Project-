import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Info from './Info';
import ReactDOM from 'react-dom';


function info(){
    ReactDOM.render(<Info />, document.getElementById('root'));
  }
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

const ButtonAppBar = () => {
    const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick ={info}>
            Info
          </IconButton>
          {/* <Typography variant="h6" className={classes.title}>
          </Typography>
          <Button 
          id="execute-request-button"
          onClick = {() => {ReactDOM.render(<SignUP />, document.getElementById('root'))}}
          color="inherit">
          Sign Out</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default ButtonAppBar;