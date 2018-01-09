import React from "react";
import Form from "../Component/Form";
import TextField from "../Component/Fields/TextField";
import Icon from "../Component/Icon";
import Submit from "../Component/Fields/Submit";
import HiddenField from "../Component/Fields/HiddenField";
import DeleteField from "../Component/Fields/DeleteField";

class Laborant {
    id = null;
    firstname = null;
    lastname = null;
    CNP = null;

    constructor (object) {
        this.id = object.id;
        this.firstname = object.firstname;
        this.lastname = object.lastname;
        this.CNP = object.CNP;
    }

    toString() {
        return this.firstname + ' ' + this.lastname;
    }

    getForm(success, remove) {
        return (
            <Form action={`/laborant/${this.id}/edit`} title={`Modifică laborant`} afterSuccess={success}>
                <HiddenField name={`id`} value={this.id} />
                <TextField name={`lastname`} label={`Nume`} value={this.lastname} icon={<Icon icon={`fa fa-user`} />} validators={["NotEmpty"]} />
                <TextField name={`firstname`} label={`Prenume`} value={this.firstname} icon={<Icon icon={`fa fa-user`}/>} validators={["NotEmpty"]} />
                <TextField name={`cnp`} label={`CNP (Cod Numeric Personal)`} value={this.CNP} icon={<Icon icon={`fa fa-address-card`}/>} pattern={/\d{13}/} validators={["NotEmpty", "Regex"]} />
                <Submit label={`Salvează`} />
                <DeleteField className={`pull-right`} deletePath={`/laborant/${this.id}/delete`} postDelete={remove} />
            </Form>
        );
    }

    static getForm(success) {
        return (
            <Form action={`/laborant/add`} title={`Adaugă laborant`} afterSuccess={success}>
                <TextField name={`lastname`} label={`Nume`} icon={<Icon icon={`fa fa-user`} />} validators={["NotEmpty"]} />
                <TextField name={`firstname`} label={`Prenume`} icon={<Icon icon={`fa fa-user`}/>} validators={["NotEmpty"]} />
                <TextField name={`cnp`} label={`CNP (Cod Numeric Personal)`} icon={<Icon icon={`fa fa-address-card`}/>} pattern={/\d{13}/} validators={["NotEmpty", "Regex"]} />
                <Submit label={`Adaugă`} />
            </Form>
        );
    }
}

let Mapping = {
    id: "ID",
    firstname: "Prenume",
    lastname: "Nume",
    CNP: "CNP",
};

const LaborantEntity = {
    name: "Laborant",
    route: "/laborant",
    class: Laborant,
    mapping: Mapping
};

export default LaborantEntity;
