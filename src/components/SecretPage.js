import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {compose} from "redux";

import requireAuth from "../hocs/requireAuth";

class SecretPage extends React.Component {

    state = {content: []};

    componentDidMount() {
        (async () => {
            const response = await axios.get('http://localhost:3090', {headers: {'Authorization': this.props.token}});
            this.setState({content: response.data});
        })()
    }

    render () {
        return (
            <div>
                {this.state.content.map((item, key) => <div key={key}>{item}</div>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.status.token
    }
}

export default compose(connect(mapStateToProps), requireAuth)(SecretPage);
