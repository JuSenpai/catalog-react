import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className={ this.props.className }>
                {
                    this.props.title &&
                    <h2 className={`menu-title`}>{ this.props.title }</h2>
                }
                { this.props.children }
            </div>
        );
    }
}

export default Menu;

