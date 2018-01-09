import React from 'react';
import InputField from "./InputField";
import API from "../../API";

class AutocompleteField extends InputField {
    entities = [];
    labels = [];
    values = [];
    constructor (props) {
        super(props);

        API.fetch(this.props.pool, this.populate.bind(this));

        this.handleChange = this.handleChange.bind(this);
    }

    populate(pool) {
        this.entities = pool.map(e => new this.props.entity.class(e));
        this.entities.forEach((entity, index) => {
            this.labels[index] = entity.toString();
            this.values[index] = entity.id;
        });

        let results = this.labels.map(result => <li className={`autocomplete-result`}>{result}</li>);
        this.setState({
            results: results
        });
    }

    handleChange(e) {
        let query = e.target.value;
        let results = [];
        this.labels.forEach((label, index) => new RegExp(query, "i").test(label) ? results.push(label) : null);

        results = results.map(result => <li className={`autocomplete-result`}>{result}</li>);
        this.setState({
            value: e.target.value,
            results: results
        });
    }

    render() {
        return (
            <label className={`form-label`}>
                <input type={`text`} onChange={this.handleChange} className={`form-control`} />
                <div className={`autocomplete-container`}>
                    <ul className={`autocomplete-results`}>
                        {this.state.results}
                    </ul>
                </div>
            </label>
        );
    }
}

export default AutocompleteField;