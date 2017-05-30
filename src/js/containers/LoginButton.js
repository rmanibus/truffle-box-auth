import React from 'react'
import { Button} from 'semantic-ui-react'

import { connect } from 'react-redux'
import { loginUser } from '../actions/LoginButtonActions'


const LoginButton = ({ onLoginUserClick }) => {
  return(

      <Button primary onClick={(event) => onLoginUserClick(event)}>Login</Button>
  
  )
}





const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUserClick: (event) => {
      event.preventDefault();
      dispatch(loginUser())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton)

