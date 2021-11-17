import React, {useState} from 'react'
import {useHistory} from "react-router-dom";
import {Form, Button, Modal, Row, Col} from 'react-bootstrap';

 function FormApi() {
    let history = useHistory();
    const [state, setState] = useState({
        userId: "",
        title: "",
        body: "",
        smShow: false,
        dataResponse: '',
      })
    const API_URL = process.env.REACT_APP_API_URL;

    const handleChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setState({...state, [name]: value});
      }

    const handleSubmit = (e) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(state)
        };
        e.preventDefault();
       
        fetch(API_URL, requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                setState({...state, title: '', body: '', userId: '', smShow: true, dataResponse: data, });
            })
            .catch(error => {
                alert(error.message);
            });      
    }

    return (
        <Row className="component-second">
            <Col>
                <h4 className="mb-5 text-center"> ĮVESKITE STRAIPSNIO DUOMENIS </h4> 
                <Form className="m-auto w-50" onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <div className="col-xs-12 col-md-4 p-0 pt-3 ">
                            <Form.Control type="number" name="userId" min="1" className="form-control " placeholder="Įveskite vartotojo ID" value={state.userId} onChange={handleChange} required/>
                        </div>
                        <div className="col-xs-12 col-md-8 p-0 pt-3">
                        <   Form.Control type="text" name="title" className="form-control" placeholder="Įveskite pavadinimą" value={state.title} onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className="form-group row pt-3">
                        <Form.Control className="form-control" name="body" type="textarea"  as="textarea" rows={3} placeholder="Įveskite tekstą"  value={state.body}
                        onChange={handleChange}required/>
                    </div>
                    <div className="row pt-3 d-flex">
                        <div className="text-center m-auto">
                            <Button className="button"  variant="success"  active type="submit">ĮRAŠYTI DUOMENIS</Button>
                        </div>
                        <Modal
                            size="sm"
                           
                            show={state.smShow}
                            onHide={() => setState({...state, smShow: false})}
                            aria-labelledby="example-modal-sizes-title-sm"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-sm">
                                    Įrašas įterptas sėkmingai
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>ID: {state.dataResponse['id']}<br/>Vartotojo ID: {state.dataResponse['userId']} <br/>Pavadinimas: {state.dataResponse['title']} <br/>Tekstas: {state.dataResponse['body']}<br/></Modal.Body>
                        </Modal>
                    </div>
                </Form>
                <div className="text-center">
                    <Button className="text-center pt-1 m-4" variant="secondary"  onClick={() => history.goBack()} >Atgal</Button>{' '}
                </div>
            </Col>
        </Row>
)}
export default FormApi