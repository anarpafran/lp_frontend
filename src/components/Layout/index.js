import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


class AppLayout extends React.Component {
    render() {
        return (<div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Lending Front</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                </Nav>
            </Navbar>
            <main className='mt1'>
                <Container >
                    <div className="row">
                        <div className="col-md-2">
                            <img className='rounded mx-auto d-block img-thumbnail' src='/logo.jpeg' alt='Logo'/>
                        </div>
                        <div className="col-md-10">
                            {this.props.children}
                        </div>
                    </div>
                </Container>
            </main>
        </div>);
    }
}

export default AppLayout