import React, {useState, useEffect} from 'react'
import {Card, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

 function DetailPart()  {

    let history = useHistory();
    const [dataOne, setOne] = useState([]); //saugoti irasui is json
    const location = useLocation();
    console.log(location.pathname); 
    console.log(location.state.id); 

    useEffect(() => {
        const fetchData = async () => {
            try{
                const URL = `https://jsonplaceholder.typicode.com/posts/${location.state.id}`;
              
                let res = await fetch(URL); // 
                let response = await res.json();
                if (response===undefined){//jei grazino netuscia atsakyma
                    alert("No info found.");
                }
                else{
                    setOne(response); //saugom atsakyma i state reiksme, grazinancia irasus
                    //console.log(dataOne);
                    // alert(dataOne);
                }
            }catch (error) {console.error(error);}
        };
        fetchData();
    }, [location]); //jei reiksme atsinaujins, bus vykdoma funkcija

    return (
    <div className="mx-auto">
        <Card style={{ width: '26rem' }} className="text-center mx-auto">
            <Card.Body className="d-flex flex-column ">
                <Card.Title>Vartotojo id: {dataOne.userId}</Card.Title>
                <Card.Text> ID: {dataOne.id}</Card.Text>
                <Card.Text> Pavadinimas:<br/>{dataOne.title}</Card.Text>
                    Tekstas:<br/> {dataOne.body}
                <Button className="text-center pt-1 m-4" variant="secondary"  onClick={() => history.goBack()} >Atgal</Button>{' '}
            </Card.Body>
        </Card>
    </div>
    )
}
export default DetailPart