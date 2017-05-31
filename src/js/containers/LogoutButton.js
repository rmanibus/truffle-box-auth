import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

// Actions
import { logoutUser } from '../actions/LogoutButtonActions'

// UI
import { Button } from 'semantic-ui-react'

const LogoutButton = ({ onLogoutUserClick }) => {

  return(
      <Button onClick={(event) => onLogoutUserClick(event)}>Logout</Button>
  )
}




const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({onLogoutUserClick: logoutUser}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton)


