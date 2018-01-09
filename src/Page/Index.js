import React from "react";
import AbstractPage from "./AbstractPage";
import {withCookies} from 'react-cookie';
import {withRouter} from 'react-router-dom';
import Menu from "../Component/Menu";
import MenuItem from "../Component/MenuItem";
import AutocompleteField from "../Component/Fields/AutocompleteField";
import LaborantEntity from "../Entity/Laborant";

class Index extends AbstractPage {
    header() {
        return (
            <Menu className={`header-menu`}>
                {
                    this.state.user.role === "Administrator" &&
                    <MenuItem url={`/admin/dashboard`} label={`Panoul administratorului`} icon={`fa fa-wrench`} references={{user: this.state.user}}/>
                }
                <MenuItem url={`/labs`} label={`Laboratoarele mele`} icon={`fa fa-flask`} references={{user: this.state.user}}/>
                <MenuItem url={`/logout`} label={this.state.user.username ? `Delogare (` + this.state.user.username + `)` : `Delogare`} icon={`fa fa-sign-out`} />
            </Menu>
        );
    }

    body() {
        return (
            <div className="form-container">
                <AutocompleteField pool={`/laborant`} entity={LaborantEntity} />
            </div>
        );
    }
}

export default withRouter(withCookies(Index));