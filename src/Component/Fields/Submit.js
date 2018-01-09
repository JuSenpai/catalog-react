import React from 'react';
import InputField from "./InputField";

class Submit extends InputField {
    constructor (props) {
        super(props);

        this.state.value = true;
    }
    validate() { return true; }
    render() {
        return (
            <input type={`submit`} className={this.props.className + ` btn btn-primary`} value={this.props.label} formNoValidate={this.props.formNoValidate} />
        );
    }
}

export default Submit;