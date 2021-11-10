import React from 'react'
//import {Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

 function ItemPart(info) {
    
    let history = useHistory();
    const redirect = () => {
        history.push({
            pathname: '/aprasymas',
            state: { id: info.id }
        });

        window.scrollTo(0, 0);
    }

    return (
        <tr onClick={redirect} style={{ cursor:'pointer' }}  >
            <th key = {info.index}>{info.index}</th>
            <td className="text-center">{info.userId}</td>
            <td className="text-center">{info.id}</td>
            <td className="firstletter text-left">{info.title}</td>
            {/*<td>{info.body}</td>*/}
            {/*  <Button className="button" onClick={redirect} variant="primary"  active type="submit" >Plačiau</Button>*/}
        </tr>
    )
}
export default ItemPart