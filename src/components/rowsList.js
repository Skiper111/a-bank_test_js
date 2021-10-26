import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import TableRow from "./tableRow";

const RowsList = observer(() => {
    const { table } = useContext(Context)
    const lastIndex = table.page * table.limit
    const firstIndex = lastIndex - table.limit
    const current = table.filteredData.slice(firstIndex, lastIndex)
    return (
        <tbody>
            {current.map((row) =>
                <TableRow  key={row[0]} row={row}/>
            )}
        </tbody>
    )
})

export default RowsList
