import React from 'react'
import { Button} from 'semantic-ui-react'

const LoginButton = ({ onLoginUserClick }) => {
  return(

      <Button primary onClick={(event) => onLoginUserClick(event)}>Login</Button>
  
  )
}

export default LoginButton
