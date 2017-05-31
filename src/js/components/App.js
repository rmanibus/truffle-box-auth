import React, { Component } from 'react'

// UI Components
import MenuContainer from '../containers/Menu'
import SidebarLeftPush from '../containers/SidebarLeftPush'

// Styles
import 'semantic-ui-css/semantic.min.css';

import {Grid} from 'semantic-ui-react'

import '../../css/App.css'


class App extends Component {

  
  render() {
    

    return (
        <div>
        {/*<SidebarLeftPush className="App">*/}
            <MenuContainer/>
            
            <br/>
            <Grid container verticalAlign='middle' columns={16}  centered>
                <Grid.Column mobile={16} tablet={8} computer={6} >
                    {this.props.children}
                </Grid.Column>
            </Grid>
        {/*</SidebarLeftPush>*/}
        </div>
    );
  }
}

export default App
