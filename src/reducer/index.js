import modalReducer from './modal';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    modal: modalReducer,
});

export default rootReducer;
