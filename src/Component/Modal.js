import React from 'react';

class Modal extends React.Component {
    render() {
        if (this.props.visible) {
            return (
                <div className={`app-modals`} onClick={this.props.onClick}>
                    {this.props.children}
                </div>
            );
        } else return null;
    }
}

export default Modal;