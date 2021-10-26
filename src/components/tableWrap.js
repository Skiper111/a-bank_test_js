import React from 'react';
import DataSizeSelect from "./dataSizeSelect";
import TableHeader from "./tableHeader";
import RowsList from "./rowsList";
import Selected from "./selected";
import Search from "./search";
import Pages from "./pages";

const TableWrap = () => {
    return (
        <div className={'wrap'}>
            <DataSizeSelect/>
            <table>
                <TableHeader/>
                <RowsList/>
            </table>
            <Selected/>
            <Search/>
            <Pages/>
        </div>
    );
};

export default TableWrap;