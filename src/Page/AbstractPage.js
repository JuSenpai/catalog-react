import React from "react";
import { Cookies } from "react-cookie";
import { instanceOf } from "prop-types";
import Root from "../Component/Root";
import Header from "../Component/Header";
import Body from "../Component/Body";
import API from "../API";

class AbstractPage extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired,
    };
    state = {
        user: {
            username: "",
            role: "",
        }
    };

    getCurrentUser () {
        if (this.props.location === undefined || this.props.location.state === undefined || this.props.location.state.user.username === "") {
            API.send({_CWT: this.props.cookies.get("_CWT")}, "/user/current", function (user) {
                this.setState({
                    user: user
                });
            }.bind(this));
        } else {
            this.setState({user: this.props.location.state.user});
        }
    }

    isUserLoggedIn (yes, no) {
        const cookies = this.props.cookies;
        let data = {
            _CWT: cookies.get("_CWT"),
            access_level: this.props.access || "Student"
        };

        API.send(data, "/token/validate", function (response) {
            switch (response.allow) {
                case 0:
                    (no || function () {})();
                    break;
                case 1:
                    (yes || function () {})();
                    break;
                default:
                    this.props.history.push("/no-access");
            }
        }.bind(this));
    }

    componentDidMount () {
        this.isUserLoggedIn(function () {
            this.getCurrentUser();
        }.bind(this), function () {
            this.props.history.push("/login");
        }.bind(this));
    }

    header() {
        return null;
    }

    body() {
        return null;
    }

    render () {
        return (
            <Root>
                <Header>
                    {this.header()}
                </Header>
                <Body>
                    {this.body()}
                </Body>
            </Root>
        );
    }
}

export default AbstractPage;