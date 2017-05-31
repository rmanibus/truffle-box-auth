import React, {Component} from 'react'
import { connect } from 'react-redux'

import { HiddenOnlyAuth, VisibleOnlyAuth } from '../util/wrappers.js'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { Menu} from 'semantic-ui-react'
import Item from '../components/Item'


class MyMenu extends Component {
    constructor(props) {
        super(props);

        this.state = { activeItem: props.path }
    }
    
    

    
    render(){ 


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
            <LogoutButton/>
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
            <LoginButton/>
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



function mapStateToProps(state, ownProps) {
  return {
    state: state,
    ownProps: ownProps,
    path: state.routing.locationBeforeTransitions.pathname
  };
}

export default connect(
  mapStateToProps
)(MyMenu)

