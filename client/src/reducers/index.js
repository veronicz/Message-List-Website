import { combineReducers } from 'redux';
import messages from './MessagesReducer';
import view from './DetailedViewReducer';

export default combineReducers({
  messages,
  view
});
