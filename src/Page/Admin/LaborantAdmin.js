import React from 'react';
import LaborantEntity from "../../Entity/Laborant";
import Admin from "./Admin";

class LaborantAdmin extends React.Component {
    render() {
        return (
            <Admin entity={LaborantEntity} />
        );
    }
}

export default LaborantAdmin;