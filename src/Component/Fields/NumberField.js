import React from "react";
import InputField from "./InputField";

class NumberField extends InputField {
    constructor (props) {
        super(props);

        this.state.value = this.props.value || this.props.min;
    }

    render () {
        return (
            <label htmlFor={this.props.id} className={`form-label`}>
                {this.props.icon} {this.props.label}
                <input type={`number`}
                       className={this.props.className || `form-control`}
                       value={this.state.value || this.props.value || this.props.min || ''}
                       name={this.props.name}
                       id={this.props.id}
                       onChange={this.handleChange}
                       min={this.props.min}
                       max={this.props.max}
                />
                <h6 className={`label text-danger error`}><small>{this.state.error}</small></h6>
            </label>
        );
    }
}

export default NumberField;