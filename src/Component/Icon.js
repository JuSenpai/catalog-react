import React from 'react';

class Icon extends React.Component {
    render() {
        return (
            <i className={this.props.icon} />
        );
    }
}

export default Icon;