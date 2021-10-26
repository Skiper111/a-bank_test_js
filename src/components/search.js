import React, {useContext} from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import {Context} from "../index";
const Search = () => {
    const { table } = useContext(Context)
    function filtration(e) {
        table.setSearchItem(e.target.value)
        const filtered = table.data.filter((item) => {
             return item.toString().includes(table.searchItem)
        })
        table.setFilteredData(filtered)
        table.setTotalCount(filtered.length)
    }
    return (
        <InputGroup size="sm" className="mb-3 mt-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <FormControl onChange={filtration} aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
        </InputGroup>
    );
};

export default Search;