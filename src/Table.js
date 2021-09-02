import React, { Component } from "react";

class Table extends Component {
    render() {
        const { characterData } = this.props;
        const rows = characterData.map((row, index) => {
            return (
                <table key={index}>
                    <tbody>
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.job}</td>
                        </tr>
                    </tbody>
                </table>
            );
        });
        return rows;
    }
}

export default Table;
