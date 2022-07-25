import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";

import reducers from "./reducers";
import App from './components/App';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Homepage from "./components/Homepage";
import SecretPage from "./components/SecretPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

const token = window.localStorage.getItem('token');
let initialState = {};

if (token) {
    initialState = {
        status: {
            token: token,
            loggedIn: true
        },
        message: ''
    }
}
else {
    initialState = {
        status: {
            token: '',
            loggedIn: false
        },
        message: ''
    }
}

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

root.render(
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route element={<App/>} path='/' >
                <Route element={<Signup/>} path='/signup' />
                <Route element={<Login/>} path='/login' />
                <Route element={<Logout />} path='/logout' />
                <Route element={<SecretPage />} path='/secret' />
                <Route index element={<Homepage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
    </Provider>
);
