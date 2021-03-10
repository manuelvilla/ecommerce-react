import React from 'react';
import './signup.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
  constructor(){
    super();
    this.state = {
      displayname: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({email: '',password: ''})
  }

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value})
  }

  render(){
    return(
      <div className='sign-up'>
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='Email' required/>
          <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='Password' required/>

          <CustomButton type='submit' value='Sign up'>Sign up </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;
