import React from "react";
import InputField from "./InputField";

class SelectField extends InputField {
    validate () {
        return true;
    }

    render () {
        let options = this.props.choices.map(
            choice => <option key={choice.id} value={choice.id}>{choice.toString()}</option>
        );

        return (
            <label htmlFor={this.props.id} className={`form-label`}>
                {this.props.icon} {this.props.label}
                <select className={this.props.className || `form-control`} onChange={this.handleChange} name={this.props.name} id={this.props.name} value={this.state.value || this.props.value || this.props.default || 'Alege o variantă...'}>
                    {options}
                </select>
                <br />
            </label>
        );
    }
}

export default SelectField;


