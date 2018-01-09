import React from 'react';
import Form from "../Component/Form";
import Submit from "../Component/Fields/Submit";
import TextField from "../Component/Fields/TextField";
import DeleteField from "../Component/Fields/DeleteField";
import SelectField from "../Component/Fields/SelectField";
import HiddenField from "../Component/Fields/HiddenField";
import Icon from "../Component/Icon";
import API from "../API";

class Student {
    id = null;
    firstname = null;
    lastname = null;
    CNP = null;
    group = null;

    constructor (object) {
        this.id = object.id;
        this.firstname = object.firstname;
        this.lastname = object.lastname;
        this.CNP = object.CNP;
        this.group = object.group;
    }

    getForm(success, remove) {
        return null;
    }

    static getForm(success) {
        return (
            <Form action={`/student/add`} afterSuccess={success} title={`Adaugă un student`}>
                <TextField name={`lastname`} label={`Nume`} icon={<Icon icon={`fa fa-user`} />} />
                <TextField name={`firstname`} label={`Prenume`} icon={<Icon icon={`fa fa-user`} />} />
                <TextField name={`cnp`} label={`CNP (Cod numeric personal)`} icon={<Icon icon={`fa fa-address-card`}/>} />
                <TextField name={`group`} label={`Grupă`}  icon={<Icon icon={`fa fa-users`}/>}/>
                <Submit label={`Adaugă`}/>
            </Form>
        );
    }
}

const Mapping = {
    id: "ID",
    firstname: "Prenume",
    lastname: "Nume",
    CNP: "CNP",
    group: "Grupă"
};

const StudentEntity = {
    name: "Student",
    route: "/student",
    class: Student,
    mapping: Mapping,
};

export default StudentEntity;