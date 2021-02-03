import React from 'react';

const Spinner = props =>
{ 
    return (
    <div>
    <table>
    <tbody>
    <tr>
    <td><div className="ui active inline loader"/></td>
    <td style={{padding: "5px"}}><div>{props.message}</div></td></tr>
    </tbody>
    </table>
    </div>
    );

    
};

Spinner.defaultProps = {
    message: 'Loading...'
    };

export default Spinner;