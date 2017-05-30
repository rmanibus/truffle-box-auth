import { connect } from 'react-redux'
import MyMenu from './Menu'


function mapStateToProps(state, ownProps) {
  return {
    state: state,
    ownProps: ownProps,
    path: state.routing.locationBeforeTransitions.pathname
  };
}

const MenuContainer = connect(
  mapStateToProps
)(MyMenu)

export default MenuContainer
