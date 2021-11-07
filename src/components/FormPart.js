import React from 'react'
import { useHistory } from "react-router-dom";
import {Button} from 'react-bootstrap';

 function FormPart() {
    let history = useHistory();
    
    return (
    <div className="text-center">
        <h3> Čia bus forma </h3>   
        <Button className="text-center pt-1 m-4" variant="secondary"  onClick={() => history.goBack()} >Atgal</Button>{' '}
    </div>
    )
}
export default FormPart