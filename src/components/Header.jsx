// Header.js

import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import log from '../../public/buildinglogo.avif';
import './Header.css';

export default function Header() {
  return (
    <div className='head'>
      <Navbar className="fixed-top bg-white" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              alt=""
              src={log}
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            <span className="font-weight-bold">Aprt</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#price">Price</Nav.Link>
              <Nav.Link href="#site-floor-plan">Site & Floor Plan</Nav.Link>
              <Nav.Link href="#amenities">Amenities</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
