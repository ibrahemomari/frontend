import React, { Component } from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Coffee shope</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/favorite">favorite</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header
