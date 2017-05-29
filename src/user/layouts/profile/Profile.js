import React, { Component } from 'react'
import ProfileFormContainer from '../../ui/profileform/ProfileFormContainer'

class Profile extends Component {
  render() {
    return(
      <main className="container">
            <h1>Profile</h1>
            <p>Edit your account details here.</p>
            <ProfileFormContainer />
      </main>
    )
  }
}

export default Profile
