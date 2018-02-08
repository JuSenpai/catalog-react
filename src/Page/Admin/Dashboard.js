import React from "react";
import { withCookies } from "react-cookie";
import { withRouter } from "react-router-dom";
import MenuItem from "../../Component/MenuItem";
import Menu from "../../Component/Menu";
import AbstractPage from "../AbstractPage";
import Root from "../../Component/Root";
import Header from "../../Component/Header";
import Body from "../../Component/Body";
import Sidebar from "../../Component/Sidebar";

class Dashboard extends AbstractPage {
    header () {
        return (
            <Menu className={`header-menu`}>
                <MenuItem url={`/`} label={`Acasă`} icon={`fa fa-home`} references={{user: this.state.user}}/>
                <MenuItem url={`/logout`}
                          label={this.state.user.username ? `Delogare (` + this.state.user.username + `)` : `Delogare`}
                          icon={`fa fa-sign-out-alt`}/>
            </Menu>
        );
    }

    sidebar () {
        return (
            <Menu title={`Dashboard`}>
                <MenuItem url={"/admin/users"} label={`Administrare Utilizatori`} className={`menu-item v-menu-item`}
                          icon={`fa fa-users`} references={{user: this.state.user}}/>
                <MenuItem url={"/admin/students"} label={`Administrare Studenţi`} className={`menu-item v-menu-item`}
                          icon={`fa fa-graduation-cap`} references={{user: this.state.user}}/>
                <MenuItem url={"/admin/laborants"} label={`Administrare Laboranţi`} className={`menu-item v-menu-item`}
                          icon={`fa fa-users`} references={{user: this.state.user}}/>
                <MenuItem url={"/admin/laboratories"} label={`Administrare Laboratoare`} className={`menu-item v-menu-item`}
                          icon={`fa fa-flask`} references={{user: this.state.user}}/>
            </Menu>
        );
    }

    render () {
        return (
            <Root>
                { this.loadingCondition() && <div className={`loading`}><h1><i className="fa fa-spinner rotating"/>&nbsp;&nbsp;&nbsp;Încărcare...</h1></div> }
                <Header>
                    {this.header()}
                </Header>
                <Body className={`app-body admin-body`}>
                <Sidebar align={`left`}>
                    {this.sidebar()}
                </Sidebar>
                </Body>
            </Root>
        );
    }
}

export default withRouter(withCookies(Dashboard));
