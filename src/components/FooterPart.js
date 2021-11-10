import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {Navbar, Container} from 'react-bootstrap'
 function FooterPart() {
    
    return (
        <Row  className="component-last bg-secondary text-white align-items-center   justify-content-center" >
            <Col xs={12} md={3}> 
                <Navbar  className="w-50 " bg="none" variant="dark">
                    <Container >
                        <Navbar.Brand href="/">
                            Donatas Misiūnas
                        </Navbar.Brand>
                    </Container>
                </Navbar >
            </Col>
            <Col xs={12} md={3} > 
                <Navbar  className="w-50 " bg="none" variant="dark">
                    <Container >
                        <Navbar.Brand href="/darbai">
                            Kiti darbai
                        </Navbar.Brand>
                    </Container>
                </Navbar >
            </Col>
            <Col xs={12} md={3}> 
                <Navbar className="w-50" bg="none" variant="dark">
                    <Container >
                        <Navbar.Brand href="https://github.com/donataskitm" target="_blank">
                            GitHub
                        </Navbar.Brand>
                    </Container>
                </Navbar >
            </Col>
            <Col xs={12} md={3}> 
                <Navbar className="w-50" bg="none" variant="dark">
                    <Container>
                        <Navbar.Brand href="https://www.linkedin.com/in/donatas-m" target="_blank">
                            LinkedIn
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Col>   
        </Row>
    )
}
export default FooterPart