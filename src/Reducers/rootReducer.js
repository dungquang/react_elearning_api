import {combineReducers} from 'redux'
import { coursesReducer } from './courseReducer';

const rootReducer = combineReducers({
    courseList : coursesReducer
});
export default rootReducer;

