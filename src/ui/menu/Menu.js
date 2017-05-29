import React, {Component} from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from '../../util/wrappers.js'
import LoginButtonContainer from '../../user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from '../../user/ui/logoutbutton/LogoutButtonContainer'
import { Menu} from 'semantic-ui-react'

class MyMenu extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    
    render(){
    
    const { activeItem } = this.state
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <Menu>
        <Menu.Item
          as={Link} 
          to='/dashboard'
          name='dashboard'
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick}
        >
            Dashboard
        </Menu.Item>
        <Menu.Item
          as={Link} 
          to='/profile'
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
            Profile
        </Menu.Item>    
        <Menu.Item
          position='right'
          name='logout'
        >       
            <LogoutButtonContainer/>
        </Menu.Item>
      </Menu>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
       <Menu>
        <Menu.Item
          as={Link} 
          to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
            Home
        </Menu.Item>
        <Menu.Item
          as={Link} 
          to='/signup'
          name='signup'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
        >
            Sign Up
        </Menu.Item>
        
        <Menu.Item
          position='right'
          name='login'
        >       
            <LoginButtonContainer/>
        </Menu.Item>
       </Menu>

    )
    return(
                <div>
                <OnlyGuestLinks />
                <OnlyAuthLinks />
                </div>
    )
    }
}
export default MyMenu
