import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {Navbar, Container} from 'react-bootstrap'
 function Footer() {
    
    return (
        <Row  className="component-last bg-dark text-white d-flex align-items-center justify-content-center " >
            <Col xs={12} md={3} className=" d-flex align-items-center justify-content-center"> 
                <Navbar   bg="none" variant="dark">
                    <Container >
                        <Navbar.Brand>
                            Donatas Misiūnas
                        </Navbar.Brand>
                    </Container>
                </Navbar >
            </Col>
            <Col xs={12} md={3} className=" d-flex align-items-center justify-content-center"> 
                <Navbar bg="none" variant="dark">
                    <Container >
                        <Navbar.Brand href="/darbai">
                            Kiti darbai
                        </Navbar.Brand>
                    </Container>
                </Navbar >
            </Col>
            <Col xs={12} md={3} className=" d-flex align-items-center justify-content-center"> 
                <Navbar bg="none" variant="dark">
                    <Container >
                        <Navbar.Brand href="https://github.com/donataskitm/testine_uzduotis" target="_blank">
                            GitHub
                        </Navbar.Brand>
                    </Container>
                </Navbar >
            </Col>
            <Col xs={12} md={3} className="d-flex align-items-center justify-content-center"> 
                <Navbar  bg="none" variant="dark">
                    <Container >
                        <Navbar.Brand className=" text-center" href="https://www.linkedin.com/in/donatas-m" target="_blank">
                            LinkedIn
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Col>   
        </Row>
        
    )
}
export default Footer