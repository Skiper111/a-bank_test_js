import React, {useContext} from 'react';
import {Context} from "../index";


const TableRow = ({row}) => {
    const { table } = useContext(Context)
    function selection(e) {
        const selectedText = e.currentTarget.outerHTML.replace(/<\/?[^>]+(>|$)/g, " ");
        table.setSelected('Выбрано:' + selectedText)
    }
    return (
        <tr onClick={selection}>
            <td>{row[0]}</td>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
            <td>{row[3]}</td>
        </tr>
    );
};

export default TableRow;