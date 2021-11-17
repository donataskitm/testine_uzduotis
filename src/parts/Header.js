import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

 function Header() {
    
    return (
     <Row className="component-first bg-success text-light text-center py-4"  >
       <Col>
          <Link  className="text-decoration-none text-white" to="/">
            <h3> KVALIFIKACINĖ ATRANKOS UŽDUOTIS</h3>
          </Link>
          <h4>Front-End Academy mokymams Present Connection įmonėje</h4> 
        </Col> 
      </Row>
    )
}
export default Header