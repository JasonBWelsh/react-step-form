import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

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
        console.log('DRD __ `nextStep`');
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
        console.log('DRD __ logging `step`:::', step);
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
        this.setState({[input]: e.target.value});
      }
    
      render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state.fields;
        const values = { firstName, lastName, email, occupation, city, bio };
        // return (
        //   <main className="App">
        //     <UserForm />
        //   </main>
        // );
        switch(step) {
          case 1:
            return (
              <FormUserDetails 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            )
            break;
          case 2:
            return (
              <h1>FormPersonalDetails</h1>
            )
            break; 
          case 3:
            return (
              <h1>Confirm</h1>
            )
            break;
          case 4:
            return (
              <h1>GreatSuccess</h1>
            )
            break;
          default:
            return (
              <div>default</div>
            )
            break;
        }
      }
  }

export default UserForm
