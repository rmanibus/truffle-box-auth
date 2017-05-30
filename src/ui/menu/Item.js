import React, {Component} from 'react'
import { Link } from 'react-router'
import { Menu} from 'semantic-ui-react'


class Item extends Component {



    constructor(props) {
        super(props);
        
        if (this.props.to === undefined)
              this.state = {destination: '/' + this.props.name};
        else
              this.state = {destination:this.props.to};
    }
    
    
    render(){
    return (
        <Menu.Item
          as={Link} 
          to={this.state.destination}
          name={this.props.name}
          active={this.props.activeItem === this.state.destination}
        >
            {this.props.name}
        </Menu.Item>
       )
    }
}

export default Item
