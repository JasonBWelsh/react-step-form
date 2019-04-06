import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, RaisedButton, TextField } from 'material-ui';

export class FormPersonalDetails extends Component {

    previous = e => {
      e.preventDefault();
      this.props.prevStep();
    };

    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
          <MuiThemeProvider >
            <React.Fragment >
              <AppBar title = "Enter Personal Details Details" / >
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
                label = "Previous"
                primary = { false }
                onClick = { this.previous }
              />
              <RaisedButton
                label = "Continue"
                primary = { true }
                onClick = { this.continue }
              />
            </React.Fragment >
          </MuiThemeProvider>
        )
    }
};

export default FormPersonalDetails;
