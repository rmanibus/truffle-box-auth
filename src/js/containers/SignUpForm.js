import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

// Actions
import { signUpUser } from '../actions/SignUpFormActions'

// UI
import { Button, Form } from 'semantic-ui-react'

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  onInputChange(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.name.length < 2)
    {
      return alert('Please fill in your name.')
    }

    this.props.onSignUpFormSubmit(this.state.name)
  }

  render() {
    return(
      
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Field>
          <label htmlFor="name">Name</label>
          <input id="name" value={this.state.name} placeholder="Name" type="text" onChange={this.onInputChange.bind(this)}/>
        </Form.Field>

        <Button type='submit'>Sign Up</Button>
      </Form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({onSignUpFormSubmit: signUpUser}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm)

