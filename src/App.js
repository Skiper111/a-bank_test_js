import './App.css';
import React, {useContext, useEffect} from "react";
import {fetchTable} from "./https/tableApi";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableWrap from "./components/tableWrap";


const App = observer(() => {
    const { table } = useContext(Context)
    useEffect(() => {
        fetchTable().then(data => {
          table.setIdentifiers(data[0])
          table.setData(data.slice(1))
          table.setTotalCount(data.length - 1)
        })
    }, [])
    return (
        <>
            <TableWrap/>
        </>
    );
})

export default App;
