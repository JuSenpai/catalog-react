import React from "react";
import InputField from "./InputField";

class SelectField extends InputField {
    /**
     * Apparently, the initial value does not get set if I use the "value" prop on the select in render..
     * The select value simply appears as empty
     * Idk why, but this works :)
     */
    componentDidMount() {
        this.setState({
            value: this.props.value || this.props.default || this.props.choices[0].id
        });
    }

    validate() {
        return true;
    }

    render () {
        let options = this.props.choices.map(
            choice => <option key={choice.id} value={choice.id}>{choice.toString()}</option>
        );

        return (
            <label htmlFor={this.props.id} className={`form-label`}>
                {this.props.icon} {this.props.label}
                <select className={this.props.className || `form-control`} onChange={this.handleChange} name={this.props.name} id={this.props.name} value={this.state.value || this.props.value || this.props.default || this.props.choices[0].id}>
                    {options}
                </select>
                <h6 className={`label text-danger error`}><small>{this.state.error}</small></h6>
            </label>
        );
    }
}

export default SelectField;


