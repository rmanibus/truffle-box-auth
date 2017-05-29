import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class ProfileForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.name
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

    this.props.onProfileFormSubmit(this.state.name)
  }

  render() {
    return(
      
    <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Field>
          <label htmlFor="name">Name</label>
          <input id="name" value={this.state.name} placeholder="Name" type="text" onChange={this.onInputChange.bind(this)}/>
        </Form.Field>

        <Button type='submit'>Update</Button>
    </Form>
    )
  }
}

export default ProfileForm
