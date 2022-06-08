import { combineReducers } from 'redux'
import { filmReducer } from './filmReducer'
const reducers = combineReducers({
  films: filmReducer,
})

export default reducers