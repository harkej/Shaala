import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import ShaalaLogo from 'assets/img/shaala.png';

const styles = {
  textField: {
    marginTop: '10px',
  },
};

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      showPassword: false,
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleClickShowPassword = () => {
    this.setState((prevState) => {
      return {
        showPassword: !prevState.showPassword,
      };
    });
  }

  handleSignIn = () => {
    const { username, password } = this.state;
    if (username === 'admin' && password === 'admin') {
      window.location.pathname = '/dashboard';
    } else {
      alert('You are not authorized to sign in.')
    }
  }

  render() {
    const { username, password, showPassword } = this.state;

    return (
      <div className="flex-row">
        <div className="hero flex-center">
          <img className="logo" src={ShaalaLogo} alt="Shaala" />
          <div className="hero-message">
            <p className="hero-title">Simple & Intuitive</p>
            <p className="hero-sub-title">the modern tool for the modern school</p>
          </div>
        </div>
        <div className="login flex-center">
          <div>
            <p className="header-text">Sign In</p>
            <p className="sub-text">Enter your information below to sign in</p>
          </div>
          <div className="login-form">
            <TextField
              id="standard-name"
              label="Username"
              value={username}
              onChange={this.handleChange('username')}
            />
            <TextField
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              value={password}
              onChange={this.handleChange('password')}
              style={styles.textField}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div className="btn-container">
              <Button 
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={this.handleSignIn}
              >
                SIGN IN
              </Button>
            </div>
          </div>
          <div className="new-account-container">
            Forgot your password? <span className="new-account-link">Click here to create a new one</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
