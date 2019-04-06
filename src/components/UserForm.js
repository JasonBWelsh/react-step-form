import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import GreatSuccess from './GreatSuccess';

export class UserForm extends Component {
    state = {
        step: 1,
        fields: {
          firstName: '',
          lastName: '',
          email: '',
          occupation: '',
          city: '',
          bio: ''
        }
      };

      // Proceed to next step
      nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      }

      // Return to previous step
      prevStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
      }

      // Handle fields change
      handleChange = input => e => {
        this.setState({fields: {
          ...this.state.fields,
          [input]: e.target.value}
        });
      }

      render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state.fields;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch(step) {
          case 1:
            return (
              <FormUserDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
          case 2:
            return (
              <FormPersonalDetails
                handleChange={this.handleChange}
                values={values}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
              />
            );
          case 3:
            return (
              <Confirm
                values={values}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
              />
            );
          case 4:
            return (
              <GreatSuccess />
            );
          default:
            return (
              <div>default</div>
            );
        }
      }
  }

export default UserForm
