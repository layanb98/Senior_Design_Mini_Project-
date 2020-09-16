import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button  from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import App from '../App.js';
import ReactDOM from 'react-dom';
import ButtonAppBar from './Header'
import {db_createUserWithEmailAndPassword} from './DatabaseManager'
import Logo from './web/2x/btn_google_signin_dark_focus_web@2x.png';
import Questions from './questions.js';


function Copyright() {
  return (
    <Typography variant="body1" color="textSecondary" align="center" spacing = "20">
      <img 
        src ={Logo}
        height = "50"
        // spacing = "50"
        onClick={() => { alert('getting there') }}
        //primary={true}
        // fullWidth ={true}
        style={{textAlign:"center", margin:"auto"}} >
        </img>
      
    </Typography>
  );
}


function validateEmail (email){
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    
    if(atpos <1 || dotpos < atpos+2 || dotpos+2 >=email.length){
        console.log("validate email");
        return false;
        
    }
    else return true;
}


class SignUp extends Component{
    constructor(props){
        super(props);
        this.state ={
            firstName: "",
            lastName: "",
            email: "",
            password:""
        }
    }
    
    
    cancel(){
        ReactDOM.render(<App />, document.getElementById('root'));
    }

    NewAccount = () => {
        var msg = this.refs.error_header;
        console.log("Info coming into NewAccount");
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.email);
        console.log(this.state.password);
        
        if(this.state.firstName === "")
            msg.innerHTML = "Invalid first name"
        else if(this.state.lastName === "")
            msg.innerHTML = "Invalid last name"
        else if(!validateEmail(this.state.email))
            msg.innerHTML = "Invalid email address"
        else if(this.state.password === "")
            msg.innerHTML = "Invalid password"
        else{
            console.log("in the last else");
            // msg.innerHTML = "";
            db_createUserWithEmailAndPassword(this.state.email, this.state.password, this.state.firstName, this.state.lastName)
            .then(function(res) {
                if(res.error){
                    //msg.innerHTML = res.error.message;
                    console.log("we have an error");
                }
                else ReactDOM.render(<Questions />, document.getElementById('root'));
            });
            ReactDOM.render(<Questions />, document.getElementById('root'));
        }
        
        
    }
    NewFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        });
        console.log(event.target.value);
    }
    NewLastName = (event) => {
        this.setState({
            lastName: event.target.value
        });
        console.log(event.target.value);
    }
    NewEmail = (event) => {
        this.setState({
            email: event.target.value
        });
        console.log(event.target.value);
    }
    NewPassword = (event) => {
        this.setState({
            password: event.target.value
        });
        console.log(event.target.value);
    }
    

  render(){
    //const classes = useStyles();
  return (
        
    
    <div>
      <ButtonAppBar/>
        {/* <makeStyles muitheme= {useStyles}/> */}
        <Container component="main" maxWidth="xs" style={{ maxWidth: "60%", padding: "10%"}}>
        <CssBaseline />
        
        <Avatar spacing = "1" style={{textAlign:"center", margin:"auto" , backgroundColor: "red"}} >
          <LockOutlinedIcon />
        </Avatar>
        <Grid container >
            {/* <Grid item xs={12} sm={6}></Grid> */}
        <Typography  variant="h5" style={{textAlign:"center", margin:"auto"}} >
          Sign up
        </Typography>
        </Grid>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange ={ this.NewFirstName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth= {true}
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange = {this.NewLastName}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange = {this.NewEmail}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange = {this.NewPassword}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              {/* <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              /> */}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick = {this.NewAccount}
           // primary = {true}
            label ="Submit"
            // className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
            </Grid>
          </Grid>
        </form>

      
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </div>

  );
}
}

export default SignUp;