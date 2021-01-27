import React from 'react';

const Spinner = props =>
{ 
    return (
    <div>
    <table>
    <tr>
    <td><div class="ui active inline loader"/></td>
    <td style={{padding: "5px"}}><div>{props.message}</div></td></tr>
    </table>
    </div>
    );

    
};

Spinner.defaultProps = {
    message: 'Loading...'
    };

export default Spinner;