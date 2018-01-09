import React from "react";
import Menu from "../Component/Menu";
import MenuItem from "../Component/MenuItem";
import AbstractPage from "./AbstractPage";
import { withCookies } from "react-cookie";
import { withRouter } from "react-router-dom";

class Laboratory extends AbstractPage {
    header () {
        return (
            <Menu className="header-menu">
                <MenuItem url="/" label={`Acasă`} icon={`fa fa-home`} references={{user: this.state.user}}/>
                <MenuItem url={`/logout`}
                          label={this.state.user.username ? `Delogare (` + this.state.user.username + `)` : `Delogare`}
                          icon={`fa fa-sign-out`}/>
            </Menu>
        );
    }
}

export default withRouter(withCookies(Laboratory));