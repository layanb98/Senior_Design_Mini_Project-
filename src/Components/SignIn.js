import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import App from '../App';
import ReactDOM from 'react-dom';
import Logo from './web/2x/btn_google_signin_dark_focus_web@2x.png';
import {db_createUserWithEmailAndPassword, db_signInWithEmailAndPassword, db_Logout, db_signInWithGoogle} from './DatabaseManager';

function validateEmail (email){
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if(atpos <1 || dotpos < atpos+2 || dotpos+2 >=email.length)
        return false;
    else return true;
}


class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password:""
        }
    }
    signIn = () =>{
        var msg = this.refs.error_header;
        if(!validateEmail(this.state.email))
            msg.innerHTML = "Invalid email address"
        else{
            msg.innerHTML = ""
            db_signInWithEmailAndPassword(this.state.email, this.state.password).then(function(res){
                if(res.error)
                    msg.innerHTML = res.error.message;
            });
        }

    }
    signup = () =>{
        ReactDOM.render(<App/>, document.getElementById('root'));
    }
    updatePassword = (event) => {
        this.setState({ password: event.target.value });
    }
    updateEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    signInWithGoogle = () =>{
        var msg = this.refs.error_header;
        //msg.innerHTML = "";
        db_signInWithGoogle().then(function(res){
            if(res.error)
                msg.innerHTML = res.error;
        });
    }
//   const classes = useStyles();
  render(){
  return (
    <Container component="main" maxWidth="xs" style={{ maxWidth: "100%", padding: "10%"}}>
      <CssBaseline />
      <div >
        <Avatar spacing ="1" style={{textAlign:"center", margin:"auto", marginTop: "20" , backgroundColor: "red"}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange = { this.updateEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange = { this.updatePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick = {this.signIn}
            //className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick = {this.signup}  variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
    <Typography variant="body1" color="textSecondary" align="center" spacing = "20">
      <img 
        src ={Logo}
        height = "50"
        // spacing = "50"
        onClick={ this.signInWithGoogle }
        primary={true}
        // fullWidth ={true}
        style={{textAlign:"center", margin:"auto"}} >
        </img>
      
    </Typography>
      </Box>
    </Container>
  );
  }
}
export default SignIn