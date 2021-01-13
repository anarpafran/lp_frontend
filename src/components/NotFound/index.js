import React from 'react';
import { Button, Container } from 'react-bootstrap';

const NotFound = () => {
    return (<Container className='text-center'>
        <img className='rounded mx-auto d-block img-thumbnail' src='/logo.jpeg' alt='Logo'/>
        <p>Sorry, page not found</p>
        <Button variant='primary' onClick={() => { window.location.href = '/' }} >Go home</Button>
    </Container>);
}

export default NotFound