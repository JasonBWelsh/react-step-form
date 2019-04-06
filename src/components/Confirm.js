import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, RaisedButton } from 'material-ui';
import { List, ListItem} from 'material-ui/List';

class Confirm extends Component {

  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = e => {
    e.preventDefault();
    // PROCESS FORM HERE //
    this.props.nextStep();
  };

  render() {
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data">
          </AppBar>
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={firstName}
            />
            <ListItem
              primaryText="Last Name"
              secondaryText={lastName}
            />
            <ListItem
              primaryText="Email"
              secondaryText={email}
            />
            <ListItem
              primaryText="Occupation"
              secondaryText={occupation}
            />
            <ListItem
              primaryText="City"
              secondaryText={city}
            />
            <ListItem
              primaryText="Bio"
              secondaryText={bio}
            />
          </List>
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.previous}
          />
          <RaisedButton
            label="Confirm & Submit"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <br />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
};

const styles = {
  button: {
    margin: '15px'
  }
};

export default Confirm;
