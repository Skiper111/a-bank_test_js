import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Selected = observer(() => {
    const { table } = useContext(Context)
    return (
        <div className={'selected'}>
            {table.selected}
        </div>
    );
});

export default Selected;