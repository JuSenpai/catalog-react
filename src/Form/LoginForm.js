import React from "react";
import Icon from "../Component/Icon";
import TextField from "../Component/Fields/TextField";
import PasswordField from "../Component/Fields/PasswordField";
import Form from "../Component/Form";
import Submit from "../Component/Fields/Submit";

class LoginForm extends React.Component {
    render () {
        return (
            <Form action={`/auth/validate`} title={`Autentificare`} afterSuccess={this.props.success}>
                <TextField  label={`Nume de utilizator`}
                            icon={<Icon icon={`fa fa-user`}/>}
                            name={`username`} validators={["NotEmpty", "Regex"]} pattern={/\w{3,}/}/>
                <PasswordField type={`password`} label={`Parolă`}
                            icon={<Icon icon={`fa fa-lock`}/>}
                            name={`password`} validators={["NotEmpty", "Regex"]} pattern={/.{5,}/}/>
                <Submit label={`Autentificare`}/>
            </Form>
        );
    }
}

export default LoginForm;