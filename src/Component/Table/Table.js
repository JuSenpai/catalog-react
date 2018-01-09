import React from "react";
import Cell from "./Cell";

class Table extends React.Component {
    columns = {};

    render () {
        let headerCells = [];
        for (let key in this.props.mapping) {
            headerCells.push(
                <Cell key={key} className={`header-cell`} content={this.props.mapping[key]} ref={cell => this.columns[key] = cell} />
            );
        }

        return (
            <table className={this.props.className || 'entity-table'}>
                <thead>
                    <tr className={`header-row`}>
                        {headerCells}
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        );
    }
}

export default Table;