import React from 'react';
import Cell from "./Cell";

class Row extends React.Component {
    cells = {};

    render() {
        let cells = [];
        for (let key in this.props.entity) {
            cells.push(
                <Cell key={key} className={`table-cell`} content={this.props.entity[key].toString()} ref={cell => this.cells[key] = cell} />
            );
        }

        return (
            <tr className={this.props.className} onClick={this.props.click}>
                {cells}
            </tr>
        );
    }
}

export default Row;