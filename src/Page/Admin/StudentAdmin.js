import React from 'react';
import Admin from "./Admin";
import StudentEntity from "../../Entity/Student";

class StudentAdmin extends React.Component {
    render() {
        return (
            <Admin entity={StudentEntity}/>
        );
    }
}

export default StudentAdmin;