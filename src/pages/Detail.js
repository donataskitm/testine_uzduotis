import React, {useState, useEffect} from 'react'
import {Card, Button, Spinner, Row, Col} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import {useLocation} from "react-router-dom";

 function Detail()  {

    let history = useHistory();
    const [dataItem, setDataItem] = useState([]);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    
    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL;
        if (location.state===undefined){
            setMessage("Informacijos nėra. Grįžkite į straipsnių sąrašą ir pasirinkite straipsnį.");
        } else {
            setMessage("ok");
        const fetchData = async () => {
            try{
                setIsLoading(true);
                const URL = API_URL+'/'+location.state.id;
                let res = await fetch(URL); 

                let response = await res.json();
                if (response===undefined){
                    setMessage("Straipsnis nerastas");
                }
                else{
                    setDataItem(response);
                    setIsLoading(false);
                }
            }catch (error) 
                    {console.error(error);}
        };
        fetchData();
    }
    }, [location]);
    return (
    <Row className="component-second">
        <Col className="text-center">
            <div>
                {(message==="ok")?
                    (isLoading?(<div className="text-center mx-auto"><h4>Kraunama...</h4><Spinner animation="border"/></div>):(
                        <React.Fragment>
                        <h4 className="text-center pb-3">VISI STRAIPSNIO DUOMENYS</h4> 
                        <Card style={{ width: '60%' }} className=" mx-auto">
                            <Card.Header as="h5" className="text-uppercase text-center">{dataItem.title}</Card.Header>
                            <Card.Body>
                                <Card.Title>Apibendrinimas</Card.Title>
                                <Card.Text className="text-left-card firstletter">{dataItem.body}</Card.Text>
                                <Card.Text  className="text-left-card">Autoriaus ID: {dataItem.userId}, Straipsnio ID: {dataItem.id}</Card.Text>
                            </Card.Body>
                        </Card>
                        </React.Fragment>
                    )
                ):(<div className="text-center mx-auto"><h4>{message}</h4></div> )}
                <div className="pt-5">
                    <Button variant="success" onClick={() => history.goBack()} >Atgal</Button>
                </div>
            </div>
        </Col>
    </Row>
    )
}
export default Detail