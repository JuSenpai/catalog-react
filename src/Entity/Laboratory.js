import React from 'react';
import LaborantEntity from "./Laborant";
import Form from "../Component/Form";
import Submit from "../Component/Fields/Submit";
import TextField from "../Component/Fields/TextField";
import NumberField from "../Component/Fields/NumberField";
import DeleteField from "../Component/Fields/DeleteField";
import SelectField from "../Component/Fields/SelectField";
import HiddenField from "../Component/Fields/HiddenField";
import Icon from "../Component/Icon";
import API from "../API";

let laborants = [];
API.fetch("/laborant", (response) => {
    laborants = response.map((object) => new LaborantEntity.class(object));
});

class Laboratory {
    id = null;
    name = null;
    year = null;
    laborant = null;

    constructor (object) {
        this.id = object.id;
        this.name = object.name;
        this.year = object.year;
        this.laborant = new LaborantEntity.class(object.laborant);
    }

    getForm(success, remove) {
        return (
            <Form title={`Modifică un laborator`} action={`/laboratory/${this.id}/edit`} afterSuccess={success}>
                <HiddenField name={`id`} value={this.id} />
                <TextField name={`name`} label={`Nume laborator`} value={this.name} icon={<Icon icon={`fa fa-flask`}/>} validators={["NotEmpty"]} />
                <NumberField name={`year`} label={`An de studiu`} value={this.year} icon={<Icon icon={`fa fa-graduation-cap`} min={1} validators={["MinValue"]} max={4}/>} />
                <SelectField name={`laborant`} label={`Laborant`} value={this.laborant.id} icon={<Icon icon={`fa fa-user`} />} choices={laborants} />
                <Submit label={`Salvează`}/>
                <DeleteField deletePath={`/laboratory/${this.id}/delete`} postDelete={remove} className={`pull-right`}/>
            </Form>
        );
    }

    static getForm(success) {
        return (
            <Form title={`Adaugă un laborator`} action={`/laboratory/add`} afterSuccess={success}>
                <TextField name={`name`} label={`Nume laborator`} icon={<Icon icon={`fa fa-flask`}/>} validators={["NotEmpty"]} />
                <NumberField name={`year`} label={`An de studiu`} icon={<Icon icon={`fa fa-graduation-cap`}/>} validators={["MinValue"]} min={1} max={4}/>
                <SelectField name={`laborant`} label={`Laborant`} icon={<Icon icon={`fa fa-user`} />} choices={laborants} />
                <Submit label={`Adaugă`}/>
            </Form>
        );
    }
}

let Mapping = {
    id: "ID",
    name: "Numele laboratorului",
    year: "Anul de studiu",
    laborant: "Laborant"
};

const LaboratoryEntity = {
    name: "Laborator",
    route: "/laboratory",
    class: Laboratory,
    mapping: Mapping
};

export default LaboratoryEntity;