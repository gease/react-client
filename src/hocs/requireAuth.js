import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router";

export default ChildComponent => {
    const ComposedComponent = (props) =>  {
        let  navigate = useNavigate();
        useEffect(() => {
            if (!props.loggedIn) {
                navigate(-1);
            }
        }, [])
        return <ChildComponent {...props} />
    }

    const mapStateToProps = (state) => {
        return {
            loggedIn: state.status.loggedIn
        }
    }

    return connect(mapStateToProps, {})(ComposedComponent);
}
