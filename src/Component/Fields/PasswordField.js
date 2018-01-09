import React from "react";
import InputField from "./InputField";
import Icon from "../Icon";

class PasswordField extends InputField {
    constructor (props) {
        super(props);

        this.state.type = "password";
        this.state.showButtonText = <Icon icon={`fa fa-eye fa-lg`}/>;

        this.showHidePassword = this.showHidePassword.bind(this);
    }

    showHidePassword () {
        this.setState({
            type: this.state.type === "text" ? "password" : "text",
            showButtonText: this.state.type === "password" ? <Icon icon={`fa fa-eye-slash fa-lg`}/> :
                <Icon icon={`fa fa-eye fa-lg`}/>
        });
    }

    render () {
        return (
            <label htmlFor={this.props.id} className={`form-label`}>
                {this.props.icon} {this.props.label}
                <input type={this.state.type}
                       className={this.props.className || `form-control`}
                       value={this.state.value}
                       name={this.props.name}
                       id={this.props.id}
                       onChange={this.handleChange}
                />
                <a href={`javascript://`} className={`show-pass`} tabIndex={"999"}
                   title={this.state.type === "text" ? `Ascunde parola` : "Vezi parola"}
                   onClick={this.showHidePassword}>{this.state.showButtonText}</a>
                <h6 className={`label text-danger error`}>
                    <small>{this.state.error}</small>
                </h6>
            </label>
        );
    }
}

export default PasswordField;