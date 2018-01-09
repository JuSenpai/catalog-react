import React from "react";
import InputField from "./InputField";

class TextField extends InputField {
    constructor (props) {
        super(props);

        this.state.value = this.props.value || '';
    }

    render () {
        return (
            <label htmlFor={this.props.id} className={`form-label`}>
                {this.props.icon} {this.props.label}
                <input type={`text`}
                       className={this.props.className || `form-control`}
                       value={this.state.value}
                       name={this.props.name}
                       id={this.props.id}
                       onChange={this.handleChange}
                />
                <h6 className={`label text-danger error`}><small>{this.state.error}</small></h6>
            </label>
        );
    }
}

export default TextField;