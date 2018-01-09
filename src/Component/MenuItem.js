import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Icon from "./Icon";

class MenuItem extends React.Component {
    constructor (props) {
        super(props);

        this.redirectWithData = this.redirectWithData.bind(this);
    }

    redirectWithData(e) {
        e.preventDefault();
        this.props.history.push({
            pathname: this.props.url,
            state: this.props.references
        });
    }

    render() {
        return (
            <Link to={ this.props.url } className={ this.props.className || "menu-item"} onClick={this.props.onClick || this.redirectWithData}>
                <Icon icon={this.props.icon}/> { this.props.label }
            </Link>
        );
    }
}

export default withRouter(MenuItem);