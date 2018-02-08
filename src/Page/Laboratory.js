import React from "react";
import Menu from "../Component/Menu";
import MenuItem from "../Component/MenuItem";
import AbstractPage from "./AbstractPage";
import {withCookies} from "react-cookie";
import {withRouter} from "react-router-dom";
import API from "../API";
import Error from "./Error";

class Laboratory extends AbstractPage {
    constructor() {
        super();

        this.state.loading = true;
        this.state.attendance = false;
        this.state.laboratories = [];
        this.showAttendance = this.showAttendance.bind(this);
    }

    componentDidMount() {
        super.componentDidMount();
        API.send({_CWT: this.props.cookies.get('_CWT')}, "/laboratory/current", laboratories => {
            if ("code" in laboratories) {
                this.props.history.push({
                    pathname: '/not-found',
                    state: { message: laboratories.message }
                });
            } else {
                this.setState({
                    laboratories: laboratories,
                    loading: false,
                });
            }
        });
    }

    loadingCondition() {
        return this.state.loading;
    }

    showAttendance(event, lab) {
        this.setState({loading: true});
        API.send({laboratory: lab.id, user: this.state.user.username}, "/attendance", attendance => {
            this.setState({
                attendance: attendance,
                loading: false,
            });
        });
    }

    swap(labIndex) {
        this.setState({loading: true});
        API.send({attendance: this.state.attendance.id, labIndex: labIndex}, "/attendance/set", response => {
            let attendance = this.state.attendance;
            attendance.attendance = response;
            this.setState({
                attendance: attendance,
                loading: false,
            });
        });
    }

    header() {
        return (
            <Menu className="header-menu">
                <MenuItem url="/" label={`Acasă`} icon={`fa fa-home`} references={{user: this.state.user}}/>
                <MenuItem url={`/logout`}
                          label={this.state.user.username ? `Delogare (` + this.state.user.username + `)` : `Delogare`}
                          icon={`fa fa-sign-out-alt`}/>
            </Menu>
        );
    }

    body() {
        let labs = this.state.laboratories.map(lab =>
            <li key={lab.id}>
                <a href="javascript://" onClick={e => this.showAttendance(e, lab)}>{lab.name}</a>
            </li>
        );

        let attendance = [];
        if (this.state.attendance) {
            for (let i = 0; i < this.state.attendance.laboratory.count; i++) {
                attendance[i] =
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{`Laboratorul ${i + 1}`}</td>
                        <td><label onClick={e => this.swap(i)}
                                   className={`pointer label label-${this.state.attendance.attendance & Math.pow(2, i) ? 'success' : 'danger'}`}>{this.state.attendance.attendance & Math.pow(2, i) ? 'Prezent' : 'Absent'}</label>
                        </td>
                    </tr>
            }
        }

        return (
            <div className="col-lg-12">
                <div className="col-xs-4 lab-list">
                    <h1>Laboratoarele Mele</h1>
                    <div className="labs-container">
                        <ul className="stack-list">
                            {labs}
                        </ul>
                    </div>
                </div>
                {
                    this.state.attendance !== false &&
                    <div className="col-xs-8">
                        <div className="attendance">
                            <h1>{this.state.attendance.student.firstname + " " + this.state.attendance.student.lastname}
                                - Situaţie "{this.state.attendance.laboratory.name}"</h1>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Laboratorul #</th>
                                        <th>Prezenţă</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {attendance}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default withRouter(withCookies(Laboratory));