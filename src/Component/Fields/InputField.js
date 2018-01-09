import React from 'react';
import Validator from "../../Validation/Validators";

class InputField extends React.Component {
    state = { value: '', error: '' };
    constructor (props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState({
            value: event.target.value,
            error: ""
        });
    }

    validate() {
        let isValid = true;
        for(let vld in this.props.validators) {
            vld = new Validator[this.props.validators[vld]]();
            let result = vld.validate(this);
            isValid = isValid & result;
            if (!result) {
                this.setState({error: vld.message});
                return result;
            }
        }
        if (isValid) {
            this.setState({error: ""});
        }
        return isValid;
    }
}

export default InputField;