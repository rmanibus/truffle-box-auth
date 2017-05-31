import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'


// Actions
import { loginUser } from '../actions/LoginButtonActions'

// UI
import { Button} from 'semantic-ui-react'


const LoginButton = ({ onLoginUserClick }) => {
  return(

      <Button primary onClick={(event) => onLoginUserClick(event)}>Login</Button>
  
  )
}





const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({onLoginUserClick: loginUser}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton)

