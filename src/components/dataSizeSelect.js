import React, {useContext, useState} from 'react';
import { Form } from 'react-bootstrap';
import {Context} from "../index";
import UserDataSize from "../modals/userDataSize";

const DataSizeSelect = () => {
    const [show, setShow] = useState(false);
    const { table } = useContext(Context)
    function selectData(e) {
        const selectedType = e.target.getAttribute('data')
        let filtered
        switch (selectedType) {
            case '1':
                filtered = table.data
                table.setFilteredData(filtered)
                table.setTotalCount(filtered.length)
                break;
            case '2':
                filtered = table.data.slice(0, 30)
                table.setFilteredData(filtered)
                table.setTotalCount(filtered.length)
                break;
            case '3':
                setShow(true)
                break;
        }
    }
    return (
        <>
            <Form>
                Набор данных:
                <div key={`inline-radio`} className="mb-3">
                    <Form.Check
                        onClick={selectData}
                        inline
                        label="Большой"
                        name="group1"
                        type={'radio'}
                        id={`inline-radio-1`}
                        data={1}
                    />
                    <Form.Check
                        onClick={selectData}
                        inline
                        label="Маленький"
                        name="group1"
                        type={'radio'}
                        id={`inline-radio-2`}
                        data={2}
                    />
                    <Form.Check
                        onClick={selectData}
                        inline
                        label="Свой"
                        name="group1"
                        type={'radio'}
                        id={`inline-radio-3`}
                        data={3}
                    />
                </div>
            </Form>
            <UserDataSize show={show} onHide={() => setShow(false)}/>
        </>
    );
};

export default DataSizeSelect;