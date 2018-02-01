import React from "react";
import LoginForm from "../Form/LoginForm";
import {withCookies} from 'react-cookie';
import {withRouter} from 'react-router-dom';
import AbstractPage from "./AbstractPage";
import Menu from "../Component/Menu";
import MenuItem from "../Component/MenuItem";
import API from "../API";

class Login extends AbstractPage {
    constructor () {
        super();

        this.login = this.login.bind(this);
    }

    componentDidMount() {
        this.isUserLoggedIn(() => this.props.history.push('/'), null);
    }

    login(response) {
        if ("webToken" in response) {
            this.props.cookies.set("_CWT", response.webToken, { path: '/' });
            API.send({_CWT: this.props.cookies.get('_CWT')}, "/user/current", (response) => this.props.history.push({
                pathname: '/',
                state: {
                    user: response
                }
            }));
        }
    }

    header() {
        return (
            <Menu className={`header-menu`}>
                <MenuItem url={`/register`} label={`Înregistrare`} icon={`fa fa-sign-in`}/>
            </Menu>
        );
    }

    body() {
        return (
            <div className={`form-container`}>
                <LoginForm success={this.login}/>
            </div>
        );
    }
}

export default withRouter(withCookies(Login));