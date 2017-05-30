import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from '../util/wrappers.js'

import injectTapEventPlugin from 'react-tap-event-plugin';

// UI Components
import MenuContainer from '../containers/Menu'
import SidebarLeftPush from '../containers/SidebarLeftPush'

// Styles
import 'semantic-ui-css/semantic.min.css';

import { Button, Menu,  Grid, Segment } from 'semantic-ui-react'

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
