import React, { Component } from 'react'
import SignUpForm from '../../containers/SignUpForm'

class SignUp extends Component {
  render() {
    return(
      <main className="container">
            <h1>Sign Up</h1>
            <p>We've got your wallet information, simply input your name and your account is made!</p>
            <SignUpForm />
      </main>
    )
  }
}

export default SignUp
