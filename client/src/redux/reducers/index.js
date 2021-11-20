import { combineReducers } from 'redux';
import practiceMode from './practiceMode';
import worksheetButtons from './worksheetButtons'
import { login } from './user'

const rootReducer = combineReducers({
  practiceMode,
  worksheetButtons,
  login
});

export default rootReducer;