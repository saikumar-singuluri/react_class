import React from 'react';
const TableBody = (props) => { 
    // cellClick = () => {
    //     return props.click && props.click()
    // }
    return (
        <tbody>
            {props.bodyValues && props.bodyValues.map((item,index) => 
                <tr>
                    {Object.keys(item).map((key,index) => <td onClick={() => props.click(item[key])}>{item[key]}</td> )}
                    {/* {item.index && <td>{item.index}</td>}
                    <td>{item.name}</td>
                    <td>{item.job}</td> */}
                </tr>)}
        </tbody>
    );
}

export default TableBody;