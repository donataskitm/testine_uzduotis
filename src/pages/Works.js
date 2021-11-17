import React from 'react'
import data from '../data/Works';
import {useHistory} from "react-router-dom";
import {Button, Card, Row, Col} from 'react-bootstrap';

 function Works() {
    let history = useHistory();

    return (
        <Row className="component-second">
            <Col className=" m-auto">
                <h4 className="mb-5 text-center"> 2021 M. ATLIKTOS UŽDUOTYS SU JAVASCRIPT, HTML, JSON </h4> 
                <div className="justify-content-center d-flex flex-wrap flex-row ">
                    <React.Fragment>
                        {data.map((work, index)=>(
                            <Card style={{ width: '18rem' }} key = {index} className="text-center m-1">
                                <Card.Img variant="top"  src={work.imageUrl}  />
                                <Card.Body className="d-flex flex-column ">
                                    <Card.Title>{work.name}</Card.Title>
                                    <Card.Text >
                                        {work.description}
                                    </Card.Text>
                                    <Button variant="success" onClick={()=> window.open(work.butUrl, "_blank")} className = "btn mt-auto ">Žiūrėti</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </React.Fragment>
                </div>
                <div className=" mt-4 text-center">
                    <Button variant="success" onClick={() => history.goBack()} >Atgal</Button>
                </div>
            </Col>
        </Row>
    )
}
export default Works