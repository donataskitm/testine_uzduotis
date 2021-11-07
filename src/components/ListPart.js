import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import DetailPart from './DetailPart';
import ItemPart from './ItemPart';

 function ListPart() {
    
  const [dataAll, setAll] = useState([]); //saugoti irasams is json
  let history = useHistory();

  const redirect = () => {
      history.push('/pildymas')
      window.scrollTo(0, 0);
  }

  useEffect(() => {
    const fetchData = async () => {
      try{
        const URL = `https://jsonplaceholder.typicode.com/posts`;
        let res = await fetch(URL); 
        let response = await res.json();
          if (response===undefined){//jei grazino netuscia atsakyma
            alert("No info found.");
          }
          else{
            setAll(response);
            console.log(dataAll);
          }

      }catch (error) {console.error(error);}
    };
    fetchData();
  }, []); //jei reiksme atsinaujins, bus vykdoma funkcija

    return (
      <div className="text-center ">
        <h3>DUOMENYS</h3> 
        <div className="justify-content-center pr-5 pl-5">
            <table className="table ">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Eil. nr.</th>
                  <th scope="col">Vartotojo id</th>
                  <th scope="col">id</th>
                  <th scope="col">Pavadinimas</th>
                  <th scope="col">Tekstas</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              {dataAll.map((info, index)=>(<ItemPart id={index} {...info}/>
              ))}
              </tbody>
            </table>
        </div>
        <Button className="button" onClick={redirect} variant="primary"  active type="submit">Pildyti</Button>
      </div>
    )
}
export default ListPart