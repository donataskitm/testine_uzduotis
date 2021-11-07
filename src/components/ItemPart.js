import React from 'react'
import {Button} from 'react-bootstrap';
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
        <tr>
            <th scope="row" key = {info.id}>{info.id}</th>
                <td>{info.userId}</td>
                <td>{info.id}</td>
                <td>{info.title}</td>
                <td>{info.body}</td>
                <td>
                <Button className="button" onClick={redirect} variant="primary"  active type="submit" >Plačiau</Button>
            </td>
        </tr>
    )
}
export default ItemPart