import React from 'react';
import AbstractPage from "./AbstractPage";
import { withRouter } from "react-router-dom";
import { withCookies } from "react-cookie";
import Menu from "../Component/Menu";
import MenuItem from "../Component/MenuItem";
import Form from "../Component/Form";
import TextField from "../Component/Fields/TextField";
import PasswordField from "../Component/Fields/PasswordField";
import Submit from "../Component/Fields/Submit";
import Icon from "../Component/Icon";

class Registration extends AbstractPage {
    constructor () {
        super();

        this.redirect = this.redirect.bind(this);
    }

    componentDidMount() {
        // override so it won't redirect to `/login`
    }

    header() {
        return (
            <Menu className={`header-menu`}>
                <MenuItem url={`/login`} label={`Autentificare`} icon={`fa fa-sign-in`} />
            </Menu>
        );
    }

    redirect() {
        this.props.history.push("/login");
    }

    body() {
        return (
            <div className={`form-container fc-2x`}>
                <Form action={`/user/register`} afterSuccess={this.redirect} title={`Înregistrare`}>
                    <TextField name={`firstname`} label={`Prenume`} icon={<Icon icon={`fa fa-user`}/>} pattern={/\w{2,}/} validators={["NotEmpty", "Regex"]} />
                    <TextField name={`lastname`} label={`Nume`} icon={<Icon icon={`fa fa-user`}/>} pattern={/\w{2,}/} validators={["NotEmpty", "Regex"]} />
                    <TextField name={`group`} label={`Grupă`} icon={<Icon icon={`fa fa-graduation-cap`}/>} pattern={/\d{2,4}\w{1,2}/} validators={["NotEmpty", "Regex"]} />
                    <TextField name={`cnp`} label={`CNP`} icon={<Icon icon={`fa fa-id-card-o`}/>} pattern={/\d{13}/} validators={["NotEmpty", "Regex"]} />
                    <PasswordField name={`password`} label={`Parolă`} icon={<Icon icon={`fa fa-lock`}/>} pattern={/.{8,}/} validators={["NotEmpty", "Regex"]} />
                    <TextField name={`email`} label={`Adresă de e-mail`} icon={<Icon icon={`fa fa-address-book`}/>}
                        validators={["NotEmpty", "Regex"]} pattern={/^(\w+[._]?\w+)+@(\w+\.\w+)+$/}
                    />
                    <Submit label={`Trimite`} />
                </Form>
            </div>
        );
    }
}

export default withRouter(withCookies(Registration));