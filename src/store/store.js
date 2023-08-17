import { legacy_createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer.js';
import { sidebarReducer } from '../reducers/sidebarReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui : uiReducer,
    notes: notesReducer,
    sidebar:sidebarReducer,
});

export const store = legacy_createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    );