import React from 'react';
import {withCookies} from 'react-cookie';
import {withRouter, Redirect} from 'react-router-dom';
import AbstractPage from "./AbstractPage";

class Logout extends AbstractPage {
    componentDidMount() {
        this.logout();
    }

    logout() {
        this.props.cookies.remove('_CWT', { path: '/'});
        this.props.history.push('/login');
    }

    render() {
        return (
            <Redirect to={`/login`} />
        );
    }
}

export default withRouter(withCookies(Logout));