import React from 'react'
import { Button } from 'semantic-ui-react'

const LogoutButton = ({ onLogoutUserClick }) => {
  return(
      <Button onClick={(event) => onLogoutUserClick(event)}>Logout</Button>
  )
}

export default LogoutButton
