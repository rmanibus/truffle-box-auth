import React from 'react'
import { Button } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { logoutUser } from '../actions/LogoutButtonActions'


const LogoutButton = ({ onLogoutUserClick }) => {

  return(
      <Button onClick={(event) => onLogoutUserClick(event)}>Logout</Button>
  )
}




const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutUserClick: (event) => {
      event.preventDefault();

      dispatch(logoutUser())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton)


