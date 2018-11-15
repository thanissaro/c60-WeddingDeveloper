import { combineReducers } from 'redux';
import Register from '../containers/Register';

const appReducer = combineReducers({
  Register
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer