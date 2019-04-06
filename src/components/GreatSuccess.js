import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';

class GreatSuccess extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Form Submited" />
          <div class="success-bg">
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default GreatSuccess;
