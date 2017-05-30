import React, {Component} from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from '../../util/wrappers.js'
import LoginButtonContainer from '../../user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from '../../user/ui/logoutbutton/LogoutButtonContainer'
import { Menu} from 'semantic-ui-react'
import Item from './Item'


class MyMenu extends Component {
    constructor(props) {
        super(props);

        this.state = { activeItem: props.path }
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: this.props.path })
    

    
    render(){ 
            console.log(this.props.path);
    const { activeItem } = this.state
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <Menu pointing>
        <Item
            name='dashboard'
            activeItem={this.props.path}
        />
        <Item
            name='profile'
            activeItem={this.props.path}
        />
        
        <Menu.Item
          position='right'
          name='logout'
        >       
            <LogoutButtonContainer/>
        </Menu.Item>
      </Menu>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
       <Menu pointing>
        <Item
          to='/'
          name='home'
          activeItem={this.props.path}
        />

        <Item
          name='signup'
          activeItem={this.props.path}
        />
   
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
