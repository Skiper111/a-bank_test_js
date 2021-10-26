import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TableHeader = observer(() => {
    const { table } = useContext(Context)
    function sort(e) {
        const data = e.target.getAttribute('data');
        if (table.sortBy !== data) {
            table.setSortByIncrease(false)
            table.setSortBy(data)
        }
        if (table.sortByIncrease === true) {
            const sorted = table.data.sort(function(a, b) {
                if (a[data] < b[data]) {
                    return 1; }
                if (a[data] > b[data]) {
                    return -1; }
                return 0;
            })
            table.setFilteredData(sorted)
            table.setSortByIncrease(false)
        } else {
            const sorted = table.data.sort(function(a, b) {
                if (a[data] > b[data]) {
                    return 1; }
                if (a[data] < b[data]) {
                    return -1; }
                return 0;
            })
            table.setFilteredData(sorted)
            table.setSortByIncrease(true)
        }
    }
    return (
        <thead>
            <tr>
                <th onClick={sort} data={0}>{table.identifiers.id}</th>
                <th onClick={sort} data={1}>{table.identifiers.name}</th>
                <th onClick={sort} data={2}>{table.identifiers.price}</th>
                <th onClick={sort} data={3}>{table.identifiers.quantity}</th>
            </tr>
        </thead>

    );
})

export default TableHeader;