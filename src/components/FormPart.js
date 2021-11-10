import React, {useState} from 'react'
import {useHistory} from "react-router-dom";
import {Form, Button, Modal, Row, Col} from 'react-bootstrap';


 function FormPart() {
    let history = useHistory();

    const [userId, setUserID] = useState('');
    const [title, setTitle] = useState('');
    const [body, setText] = useState('');
    const [dataResponse, setResponse] = useState('');

    const [smShow, setSmShow] = useState(false);
    const formData = {userId, title, body}
    const handleSubmit = (e) => {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    };

    e.preventDefault();//kad neprekratu formos
        if(userId.length > 4){
            alert('Įveskite vartotojo ID su mažesniu skaičiumi');
            return;
        }
        if(title.length < 5 || title.length >500){
            alert('Įveskite pavadinimą ne trumpesnį nei 5 ir ne ilgesnį  nei 500 tekstą');
            return;
        }
        if(body.length < 10 || body.length >1500){
            alert('Įveskite tekstą ne trumpesnį nei 10 ir ne ilgesnį  nei 1500 tekstą');
            return;
        }
       
        fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
   
                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                setSmShow(true);
                setResponse(data);
                setUserID('');
                setTitle('');
                setText('');
            })
            .catch(error => {
                alert(error.message);;
            });      
    }

    return (
        <Row className="component-second">
            <Col>
                <h4 className="mb-5 text-center"> ĮVESKITE STRAIPSNIO DUOMENIS </h4> 
                <Form className="m-auto w-50" onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <div className="col-xs-12 col-md-4 p-0 pt-3 ">
                            <Form.Control type="number" min="1" className="form-control " placeholder="Įveskite vartotojo ID" value = {userId} onChange={(e)=>setUserID(e.target.value)} required/>
                        </div>
                        <div className="col-xs-12 col-md-8 p-0 pt-3">
                        <   Form.Control type="text" className="form-control pt-ms-3" placeholder="Įveskite pavadinimą" value = {title} onChange={(e)=>setTitle(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="form-group row pt-3">
                        <Form.Control className="form-control" as="textarea" rows={3} placeholder="Įveskite tekstą"  value = {body}
                        onChange={(e)=>setText(e.target.value)}required/>
                    </div>
                    <div className="row pt-3 d-flex">
                        <div className="text-center m-auto">
                            <Button className="button"  variant="primary"  active type="submit">ĮRAŠYTI DUOMENIS</Button>
                        </div>
                        <Modal
                            size="sm"
                            show={smShow}
                            onHide={() => setSmShow(false)}
                            aria-labelledby="example-modal-sizes-title-sm"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-sm">
                                    Įrašas įterptas sėkmingai
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>ID: {dataResponse.id}<br/>Vartotojo ID: {dataResponse.userId} <br/>Pavadinimas: {dataResponse.title} <br/>Tekstas: {dataResponse.body}<br/></Modal.Body>
                        </Modal>
                    </div>
                </Form>
                <div className="text-center">
                    <Button className="text-center pt-1 m-4" variant="secondary"  onClick={() => history.goBack()} >Atgal</Button>{' '}
                </div>
            </Col>
        </Row>
)}
export default FormPart