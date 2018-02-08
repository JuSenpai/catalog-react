import React from 'react';
import Form from "../Component/Form";
import Submit from "../Component/Fields/Submit";
import TextField from "../Component/Fields/TextField";
import DeleteField from "../Component/Fields/DeleteField";
import HiddenField from "../Component/Fields/HiddenField";
import PasswordField from "../Component/Fields/PasswordField";
import MultipleField from "../Component/Fields/MultipleField";
import Icon from "../Component/Icon";
import API from "../API";
import LaboratoryEntity from "./Laboratory";
import UserEntity from "./User";

let laboratories = [];
API.fetch("/laboratory", function (response) {
    laboratories = response.map(lab => new LaboratoryEntity.class(lab));
});

class Student {
    id = null;
    firstname = null;
    lastname = null;
    CNP = null;
    group = null;
    user = null;
    laboratories = null;

    constructor (object) {
        this.id = object.id;
        this.firstname = object.firstname;
        this.lastname = object.lastname;
        this.CNP = object.CNP;
        this.group = object.group;
        this.laboratories = object.laboratories || [];
        this.user = new UserEntity.class(object.user || {});
    }

    getForm(success, remove) {
        return (
            <Form action={`/student/${this.id}/edit`} afterSuccess={success} title={`Modifică un student`}>
                <HiddenField name={`id`} value={this.id} />
                <TextField name={`lastname`} label={`Nume`} icon={<Icon icon={`fa fa-user`} />} value={this.lastname}  />
                <TextField name={`firstname`} label={`Prenume`} icon={<Icon icon={`fa fa-user`} />} value={this.firstname} />
                <TextField name={`cnp`} label={`CNP (Cod numeric personal)`} icon={<Icon icon={`fa fa-address-card`}/>} value={this.CNP} />
                <TextField name={`group`} label={`Grupă`}  icon={<Icon icon={`fa fa-users`}/>} value={this.group} />
                <MultipleField name={`laboratories`} id={`laboratories`} options={laboratories} values={this.laboratories.map(lab => lab.id)} label={`Laboratoare`} icon={<Icon icon={`fa fa-flask`} />} />
                <Submit label={`Salvează`}/>
                <DeleteField className={`pull-right`} deletePath={`/student/${this.id}/delete`} postDelete={remove} />
            </Form>
        );
    }

    static getForm(success) {
        return (
            <Form action={`/student/add`} afterSuccess={success} title={`Adaugă un student`}>
                <TextField name={`lastname`} label={`Nume`} icon={<Icon icon={`fa fa-user`} />} />
                <TextField name={`firstname`} label={`Prenume`} icon={<Icon icon={`fa fa-user`} />} />
                <PasswordField name={`password`} label={`Parolă`} icon={<Icon icon={`fa fa-lock`}/>} />
                <TextField name={`email`} pattern={/^(\w+[._]?\w+)+@(\w+\.\w+)+$/} label={`Adresă de email`} icon={<Icon icon={`fa fa-envelope-o`}/>} validators={["NotEmpty", "Regex"]} />
                <TextField name={`cnp`} label={`CNP (Cod numeric personal)`} icon={<Icon icon={`fa fa-address-card`}/>} />
                <TextField name={`group`} label={`Grupă`}  icon={<Icon icon={`fa fa-users`}/>}/>
                <MultipleField name={`laboratories`} id={`laboratories`} options={laboratories} label={`Laboratoare`} icon={<Icon icon={`fa fa-flask`} />} />
                <Submit label={`Adaugă`}/>
            </Form>
        );
    }

    toString() {
        return `${this.firstname} ${this.lastname}`;
    }

    isMapped(field) {
        return field in Mapping;
    }
}

const Mapping = {
    id: "ID",
    firstname: "Prenume",
    lastname: "Nume",
    CNP: "CNP",
    group: "Grupă",
    user: "Nume de utilizator"
};

const StudentEntity = {
    name: "Student",
    route: "/student",
    class: Student,
    mapping: Mapping,
};

export default StudentEntity;