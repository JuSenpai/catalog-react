import React from "react";
import { withCookies } from "react-cookie";
import API from "../API";

class Form extends React.Component {
    fields = [];
    children = [];

    constructor (props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.children = this.props.children.map(
            (child, index) => {
                if (['ButtonField', 'Submit', 'DeleteField', 'Wrapper'].indexOf(child.type.name) < 0) {
                    return React.cloneElement(child, {
                        key: index,
                        ref: self => this.fields[index] = self
                    });
                } else return child;
            }
        );
    }

    handleSubmit (e) {
        e.preventDefault();
        let isFormValid = true;
        this.fields.forEach(field => isFormValid = isFormValid & field.validate());

        if (isFormValid) {
            let formData = {};
            formData._CWT = this.props.cookies.get("_CWT");
            this.fields.forEach(field => formData[field.props.name] = field.state.value);
            API.send(formData, this.props.action, function (response) {
                this.fields.forEach(field => {
                    if (field.props.name + "_error" in response) {
                        field.setState({error: response[field.props.name + "_error"]});
                        isFormValid = false;
                    }
                });
                if (isFormValid) {
                    this.props.afterSuccess(response);
                }
            }.bind(this));
        }
    }

    render () {
        return (
            <form action={this.props.action || ""} onSubmit={this.handleSubmit}>
                <h2>{this.props.title}</h2><br/>
                {this.children}
            </form>
        );
    }
}

export default withCookies(Form);