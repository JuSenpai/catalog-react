import React from 'react';
import InputField from "./InputField";

class MultipleField extends InputField {
    constructor(props) {
        super(props);

        this.state.value = this.props.values || [];
    }

    validate() {
        return true;
    }

    handleChange(e) {
        let values = Array.from(e.target.children).filter(option => option.selected).map(option => option.value);
        this.setState({
            value: values,
        });
    }

    render() {
        let options = this.props.options.map(option => <option key={option.id}
                                                               value={option.id}>{option.toString()}</option>);
        console.log(this.props.values);
        return (
            <label htmlFor={this.props.id} className={`form-label`}>
                {this.props.icon} {this.props.label}
                <select className={`form-control select`} defaultValue={this.props.values} id={this.props.id} name={this.props.name} size={this.props.size || `5`} onChange={this.handleChange} multiple>
                    {options}
                </select>
            </label>
        );
    }
}

export default MultipleField;