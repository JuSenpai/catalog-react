import React from 'react';
import Admin from "./Admin";
import LaboratoryEntity from "../../Entity/Laboratory";

class LaboratoryAdmin extends React.Component {
    render() {
        return (
            <Admin entity={LaboratoryEntity} />
        );
    }
}

export default LaboratoryAdmin;