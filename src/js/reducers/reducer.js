import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userReducer from './userReducer'

const reducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
})

export default reducer
