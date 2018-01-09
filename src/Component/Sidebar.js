import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <div className={`side-bar ` + this.props.align}>
                {this.props.children}
            </div>
        );
    }
}

export default Sidebar;