import React from "react";
import InputField from "./InputField";
import Icon from "../Icon";
import API from "../../API";
import { withCookies } from "react-cookie";

class DeleteField extends InputField {
    constructor (props) {
        super(props);

        this.deleteEntity = this.deleteEntity.bind(this);
    }

    validate() { return true; }

    deleteEntity() {
        let cwt = {_CWT: this.props.cookies.get("_CWT")};
        API.send(cwt, this.props.deletePath, this.props.postDelete || function(response) {});
    }

    render() {
        return (
            <button type={`button`} className={this.props.className + ` btn btn-primary`}
                    onClick={this.deleteEntity}>
                <Icon icon={`fa fa-trash`}/> Şterge
            </button>
        );
    }
}

export default withCookies(DeleteField);