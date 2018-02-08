import React from 'react';
import Admin from './Admin';
import UserEntity from "../../Entity/User";


class UserAdmin extends React.Component {
    render() {
        return (
            <Admin entity={UserEntity} />
        );
    }
}

export default UserAdmin;