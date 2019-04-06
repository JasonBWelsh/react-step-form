import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, RaisedButton, TextField } from 'material-ui';

class Confirm extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { handleChange, values } = this.props;
    const styles = {
      button: {
        margin: '15px'
      }
    };

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm or Edit Details">
          </AppBar>
          <TextField
            hintText = "Enter Your First Name"
            floatingLabelText = "First Name"
            onChange = { handleChange('firstName') }
            defaultValue = { values.firstName }
          />
          <br />
          <TextField
            hintText = "Enter Your Last Name"
            floatingLabelText = "Last Name"
            onChange = { handleChange('lastName') }
            defaultValue = { values.lastName }
          />
          <br />
          <TextField
            hintText = "Enter Your Email"
            floatingLabelText = "Email"
            onChange = { handleChange('email') }
            defaultValue = { values.email }
          />
          <br />
          <TextField
            hintText = "Enter Your Occupation"
            floatingLabelText = "Occupation"
            onChange = { handleChange('occupation') }
            defaultValue = { values.occupation }
          />
          <br />
          <TextField
            hintText = "Enter Your Last City"
            floatingLabelText = "City"
            onChange = { handleChange('city') }
            defaultValue = { values.city }
          />
          <br />
          <TextField
            hintText = "Bio"
            floatingLabelText = "Bio"
            onChange = { handleChange('bio') }
            defaultValue = { values.bio }
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <br />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
