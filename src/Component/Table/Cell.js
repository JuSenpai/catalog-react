import React from 'react';

class Cell extends React.Component {
    state = { content: '' };
    setContent(content) {
        this.setState({
            content: content
        });
    }

    render() {
        return (
            <td className={this.props.className || ''}>
                {this.state.content || this.props.content}
            </td>
        );
    }
}

export default Cell;