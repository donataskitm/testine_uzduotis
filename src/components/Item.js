import React from 'react'
import {useHistory} from 'react-router-dom';

 function Item(info) {
    
    let history = useHistory();
    const redirect = () => {
        history.push({
            pathname: '/aprasymas',
            state: { id: info.id }
        });
    }

    return (
        <tr onClick={redirect} style={{ cursor:'pointer' }}  >
            <th key = {info.index}>{info.index+1}</th>
            <td className="text-center">{info.userId}</td>
            <td className="text-center">{info.id}</td>
            <td className="firstletter text-left">{info.title}</td>
        </tr>
    )
}
export default Item