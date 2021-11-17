import React, {useState, useEffect} from 'react'
import {Button, Col, Row, Spinner} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import ItemPart from '../components/Item';
import Pagination from '../components/Pagination';

function List() {

  const [dataAll, setDataAll] = useState([]);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  

  const redirect = () => {
      history.push('/pildymas')
      window.scrollTo(0, 0);
  }

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    const fetchData = async () => {
      try{
        setIsLoading(true);
        const URL = API_URL;
        let res = await fetch(URL); 
        let response = await res.json();
          if (response===undefined){
            alert("No info found.");
          }
          else{
            setDataAll(response);
            setIsLoading(false);
          }
      }catch (error) {console.error(error);}
    };
    fetchData();
    
  }, []);
  
    const indexOfLastPost= currentPage*postsPerPage;
    const indexofFirstPost = indexOfLastPost-postsPerPage;
    const currentPosts = dataAll.slice(indexofFirstPost, indexOfLastPost);
    const paginate = (pageNumber) =>setCurrentPage(pageNumber);

    return (
      <Row className="component-second" >
        <Col>
          <h4 className="text-center">STRAIPSNIŲ SĄRAŠAS</h4> 
          <React.Fragment>
            {isLoading?(<div className="text-center mx-auto"><h4>Kraunama...</h4><Spinner animation="border"/></div>):(
              <div >
                <table className="m-auto table table-fit">
                  <thead className="thead-light">
                    <tr className="text-center">
                      <th>Eil. nr.</th>
                      <th>Autoriaus ID</th>
                      <th>Straipsnio ID</th>
                      <th>Straipsnio pavadinimas</th>
                    </tr>
                  </thead>
                  <tbody>
                  {currentPosts.map((info, index)=>(<ItemPart index={index} {...info}/>
                  ))}
                  </tbody>
                </table>
                <div className="m-4">
                <Pagination postsPerPage={postsPerPage} totalPosts={dataAll.length} paginate={paginate} />
                </div>
              </div>
            )}
          </React.Fragment>
          <div className="text-center">
            <Button className="button mt-4" onClick={redirect} variant="success"  active type="submit">Pildyti</Button>
          </div>
        </Col>
      </Row>
    )
}
export default List