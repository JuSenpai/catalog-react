import React from 'react';
import InputField from "./InputField";

class HiddenField extends InputField {
    constructor (props) {
        super(props);

        this.state.value = this.props.value;
    }

    validate() { return true; }

    render() {
        return (
            <input type={`hidden`}
                   name={this.props.name}
                   value={this.props.value} />
        );
    }
}

export default HiddenField;