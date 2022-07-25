import {connect} from "react-redux";

import {login} from "../actions";
import SigninForm from "./SigninForm";

const mapStateToProps = function (state) {
    return {
        message: state.message,
        loggedIn: state.status.loggedIn
    }

}

export default connect(mapStateToProps, {action: login})(SigninForm);
