import {useEffect} from "react";
import {useNavigate} from "react-router";
import {connect} from "react-redux";
import {compose} from "redux";

import {signout} from "../actions";
import requireAuth from "../hocs/requireAuth";


const Logout = (props) => {
   let navigate = useNavigate();

   useEffect(() => {
       props.signout();
        navigate(-1);
   },[])

   return '';
}

export default compose(connect(null, {signout}), requireAuth)(Logout);
