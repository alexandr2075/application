import {applyMiddleware, combineReducers, createStore} from 'redux';
import authReducer from './Auth-reducer'
import contentReducer from './Content-reducer'
import dialogsReducer from './Dialogs-reducer'
import usersReducer from './Users-reducer';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    contentPage: contentReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store
