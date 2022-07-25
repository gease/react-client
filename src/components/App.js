import React from "react";
import {Outlet} from "react-router";
import {useLocation} from "react-router";
import {connect} from "react-redux";

import Header from "./Header";
import {clear_message} from "../actions";

function App (props) {

    let location = useLocation();

    React.useEffect(() => {
        props.clear_message();
    }, [location]);

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default connect(null, {clear_message})(App);
