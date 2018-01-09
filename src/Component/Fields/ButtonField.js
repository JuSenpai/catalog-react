import React from 'react';
import { withRouter } from "react-router-dom";

class ButtonField extends React.Component {
    render() {
        return (
            <button type={`button`} className={this.props.className + ` btn btn-primary`}
                    onClick={this.props.click}>
                {this.props.icon} {this.props.label}
            </button>
        );
    }
}

export default withRouter(ButtonField);