import axios from "axios";
import {SIGNUP, SIGNOUT, ERROR, CLEAR_MESSAGE} from "./types";

export const signup = function (email, password) {
    return async function (dispatch, getState) {
        try {
            const response = await axios.post('http://localhost:3090/signup', {email, password});
            dispatch({type: SIGNUP, payload: response.data.token});
        }
        catch (e) {
            let message = '';
            switch (e.code) {
                case 'ERR_NETWORK':
                    message = 'Network error. Try again later.';
                    break;
                case 'ERR_BAD_REQUEST':
                    message = e.response.data.error;
                    break;
                default:
                    message = 'Unexpected error has ocurred';
            }
            dispatch({type: ERROR, payload: message})
        }
    }
}

export const login = function (email, password) {
    return async function (dispatch, getState) {
        try {
            const response = await axios.get('http://localhost:3090/login', {params: {username: email, password}});
            dispatch({type: SIGNUP, payload: response.data.token});
        }
        catch (e) {
            dispatch({type: ERROR, payload: 'Wrong username or password'})
        }
    }
}

export const signout = function () {
    return {
        type: SIGNOUT,
    }
}

export const clear_message = function () {
    return {
        type: CLEAR_MESSAGE,
    }
}
