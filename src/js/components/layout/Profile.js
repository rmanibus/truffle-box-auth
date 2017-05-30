import React, { Component } from 'react'
import ProfileForm from '../../containers/ProfileForm'

class Profile extends Component {
  render() {
    return(
      <main className="container">
            <h1>Profile</h1>
            <p>Edit your account details here.</p>
            <ProfileForm />
      </main>
    )
  }
}

export default Profile
