import React from 'react';
const TableHeader = (props) => {
    return (
        <thead>
            <tr>
                {props.headerValues && props.headerValues.map((item,index) => <th>{item}</th>)}
            </tr>
        </thead>
    );
}

export default TableHeader;