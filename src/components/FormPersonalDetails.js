import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, RaisedButton, TextField } from 'material-ui';

export class FormPersonalDetails extends Component {

    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
          <MuiThemeProvider >
            <React.Fragment >
              <AppBar title = "Enter User Details" / >
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
                label = "Continue"
                primary = { true }
                style = { styles.button }
                onClick = { this.continue }
              />
            </React.Fragment >
          </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
};

export default FormPersonalDetails;
