import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'

import injectTapEventPlugin from 'react-tap-event-plugin';

// UI Components
import MenuContainer from './ui/menu/MenuContainer'

// Styles
import 'semantic-ui-css/semantic.min.css';

import { Button, Menu,  Grid, Segment } from 'semantic-ui-react'

import './App.css'


class App extends Component {

  
  render() {
    

    return (
      <div className="App">

        <div>

       
            <MenuContainer/>
        
            <br/>
            <Grid container verticalAlign='middle' columns={16}  centered>
                <Grid.Column mobile={16} tablet={8} computer={6}>
                    {this.props.children}
                </Grid.Column>
            </Grid>
        </div>
        
      </div>
    );
  }
}

export default App
