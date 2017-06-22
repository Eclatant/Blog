import { combineReducers } from 'redux';

import ToDo from '../pages/ToDo/ToDoReducer';

const rootReducer = combineReducers({
  ToDo,
});

export default rootReducer;
