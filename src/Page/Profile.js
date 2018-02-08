import React from 'react';
import AbstractPage from "./AbstractPage";
import {withRouter} from 'react-router-dom';
import {withCookies} from 'react-cookie';
import Menu from "../Component/Menu";
import MenuItem from "../Component/MenuItem";
import API from "../API";

class Profile extends AbstractPage {
    constructor() {
        super();

        this.state.currentProfile = {other: {}};
        this.state.loading = true;
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        super.componentDidMount();
        API.fetch(`/user/${this.props.match.params.user}`).then(user => {
            if ("error" in user) {
                this.props.history.push({
                    pathname: '/not-found',
                    state: { message: 'Utilizatorul căutat nu există în sistem.' },
                });
            } else {
                this.props.history.push(`/profile/${user.username}`);
                this.setState({
                    currentProfile: user,
                    loading: false,
                });
            }
        });
    }

    search(e) {
        if (e.keyCode === 13) {
            this.setState({loading: true});
            API.fetch('/user/' + e.target.value).then(user => {
                if ("error" in user) {
                    this.props.history.push({
                        pathname: '/not-found',
                        state: { message: 'Utilizatorul căutat nu există în sistem.' },
                    });
                } else {
                    this.props.history.push(`/profile/${user.username}`);
                    this.setState({
                        currentProfile: user,
                        loading: false,
                    });
                }
            });
        }
    }

    header() {
        return (
            <div className="container">
                <input type={`text`} id={`u-search`} name={`u-search`} className={`header-search-bar`}
                       onKeyDown={this.search} placeholder={`Caută profil...`}/>
                <Menu className={`header-menu`}>
                    <MenuItem label={`Înapoi`} url={`/`} icon={`fa fa-chevron-left`}/>
                </Menu>
            </div>
        );
    }

    body() {
        return (
            <div className={`profile-body`}>
                <div className="row">
                    <div className="col-md-3">
                        <img src={`http://via.placeholder.com/176x256`} className="profile-pic"/>
                    </div>
                    <div className="col-md-6">
                        <h3>Profilul lui <a className="text-success">{this.state.currentProfile.username}</a></h3>
                        <hr/>
                        <h6>Nume de utilizator: <strong>{this.state.currentProfile.username}</strong></h6>
                        <h6>Adresă de email: <a href={`mailto:`}>{this.state.currentProfile.email}</a></h6>
                        <h6>Ocupaţie:
                            <strong> {this.state.currentProfile.role === "Administrator" ? "Administrator Sistem" : this.state.currentProfile.role}</strong>
                        </h6>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.currentProfile.personal_info !== undefined &&
                        <div className={`col-md-6`}>
                            <h3>Detalii Personale</h3>
                            <hr/>
                            <h6>Nume: <strong>{this.state.currentProfile.personal_info.lastname}</strong></h6>
                            <h6>Prenume: <strong>{this.state.currentProfile.personal_info.firstname}</strong></h6>
                            <h6>CNP: <strong>{this.state.currentProfile.personal_info.CNP}</strong></h6>
                            {
                                this.state.currentProfile.personal_info.group !== undefined &&
                                <h6>Grupă: <strong>{this.state.currentProfile.personal_info.group}</strong></h6>
                            }
                        </div>
                    }
                    {
                        /** TODO in case i get bored; add other stuff to user profile
                         *
                         <div className={`col-md-6`}>
                         <h3>Altele</h3>
                         <hr/>
                         <h6>Descriere:
                         <small> {this.state.currentProfile.other.description || 'Acest utilizator nu şi-a completat descrierea...'}</small>
                         </h6>
                         <h6>Facebook:
                         <small>
                         {
                             this.state.currentProfile.other.facebook ?
                                 <a href={this.state.currentProfile.other.facebook}> {this.state.currentProfile.other.facebook}</a> :
                                 ' Acest utilizator nu şi-a completat profilul de Facebook...'
                         }
                         </small>
                         </h6>
                         </div>
                         */
                    }
                </div>
            </div>
        );
    }

    loadingCondition() {
        return this.state.loading;
    }
}

export default withRouter(withCookies(Profile));