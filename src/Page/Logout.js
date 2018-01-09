import React from 'react';
import AbstractPage from "./AbstractPage";
import {withCookies} from 'react-cookie';
import {withRouter} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class Logout extends AbstractPage {
    componentWillMount() {
        this.logout();
    }

    logout() {
        this.props.cookies.remove('_CWT');
        this.props.history.push('/login');
    }

    render() {
        return (
            <Redirect to={`/login`} />
        );
    }
}

export default withRouter(withCookies(Logout));