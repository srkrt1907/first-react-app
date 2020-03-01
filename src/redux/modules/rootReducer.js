import {combineReducers} from 'redux';

import todo from './todo/todo.reducer';

const rootReducer = combineReducers({

    todo : todo

})

export default rootReducer;

