import {combineReducers} from "redux";

import {SIGNUP, ERROR, CLEAR_MESSAGE, SIGNOUT} from "../actions/types";

const status = (status = {loggedIn: false, token: ''}, action) => {
    switch (action.type) {
        case SIGNUP:
            console.log(action.payload);
            window.localStorage.setItem('token', action.payload);
            return {
                loggedIn: true,
                token: action.payload
            }
        case SIGNOUT:
            window.localStorage.removeItem('token');
            return {
                loggedIn: false,
                token: ''
            }
        default:
            return status
    }
}

const message = (message = '', action) => {
    switch (action.type) {
        case ERROR:
            return action.payload;
        case CLEAR_MESSAGE:
            return '';
        default:
            return message;
    }
}

export default combineReducers({status, message});
