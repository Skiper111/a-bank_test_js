import React, {useContext, useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const UserDataSize = observer(({show, onHide}) => {
    const { table } = useContext(Context)
    const [value, setValue] = useState(30)
    const maxValue = table.data.length
    let filtered
    function addData() {
        table.setDataLength(value)
        filtered = table.data.slice(0, table.dataLength)
        table.setFilteredData(filtered)
        table.setTotalCount(filtered.length)
        onHide()
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Выбрать кол-во строк {value}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Range</Form.Label>
                    <Form.Range
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        max={maxValue}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={addData}>Выбрать</Button>
            </Modal.Footer>
        </Modal>
    )
});

export default UserDataSize;