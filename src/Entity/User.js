import React from 'react';
import Form from '../Component/Form';
import Submit from "../Component/Fields/Submit";
import TextField from "../Component/Fields/TextField";
import DeleteField from "../Component/Fields/DeleteField";
import SelectField from "../Component/Fields/SelectField";
import PasswordField from "../Component/Fields/PasswordField";
import Icon from "../Component/Icon";

class Role {
    id = null;
    constructor(role) {
        this.id = role;
    }

    toString() {
        return this.id;
    }
}

const roles = [
    new Role("Administrator"),
    new Role("Laborant"),
    new Role("Student"),
];

class User {
    id = null;
    username = null;
    email = null;
    role = null;

    constructor(object) {
        this.id = object.id;
        this.username = object.username;
        this.email = object.email;
        this.role = object.role;
    }

    getForm(success, remove) {
        return (
            <Form action={`/user/${this.id}/edit`} title={`Modifică un utilizator`} afterSuccess={success} >
                <TextField name={`username`} id={`username`} label={`Nume de utilizator`} icon={<Icon icon={`fa fa-user`} />} value={this.username} />
                <TextField name={`email`} id={`email`} label={`Adresă de email`} icon={<Icon icon={`fa fa-envelope-o`} />} value={this.email} />
                <SelectField name={`role`} id={`role`} label={`Permisiune`} icon={<Icon icon={`fa fa-user-secret`}/>} choices={roles} value={roles.find(role => role.id === this.role).id} validators={["NotEmpty"]} />
                <Submit label="Salvează" />
                <DeleteField className="pull-right" deletePath={`/user/${this.id}/delete`} postDelete={remove} />
            </Form>
        );
    }

    static getForm(success) {
        return (
            <Form action={`/user/add`} afterSuccess={success} title={`Adaugă un utilizator`} >
                <TextField name={`username`} id={`username`} label={`Nume de utilizator`} icon={<Icon icon={`fa fa-user`} />} />
                <PasswordField name={`password`} id={`password`} label={`Parolă`} icon={<Icon icon={`fa fa-lock`}/>} />
                <TextField name={`email`} id={`email`} label={`Adresă de email`} icon={<Icon icon={`fa fa-envelope-o`} />} />
                <SelectField name={`role`} id={`role`} label={`Permisiune`} icon={<Icon icon={`fa fa-user-secret`}/>} choices={roles} validators={["NotEmpty"]} default={"Student"} />
                <Submit label={`Adaugă`}/>
            </Form>
        );
    }

    isMapped(field) {
        return field in Mapping;
    }

    toString() {
        return this.username;
    }
}

const Mapping = {
    id: "ID",
    username: "Nume de utilizator",
    email: "Adresă de email",
    role: "Permisiuni",
};

const UserEntity = {
    name: "Utilizatori",
    route: "/user",
    class: User,
    mapping: Mapping,
};

export default UserEntity;