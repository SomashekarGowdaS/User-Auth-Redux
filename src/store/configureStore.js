import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import loginReducer from '../reducers/loginReducer';
import registerReducer from '../reducers/registerReducer';
import notesReducer from '../reducers/notesReducer';

const configureStore = () => {
    const store = createStore(combineReducers({
        login: loginReducer,
        user: registerReducer,
        notes: notesReducer
    }), applyMiddleware(thunk));
    return store;
}

export default configureStore

