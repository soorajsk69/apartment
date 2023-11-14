import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import car1 from '../../public/forest.jpg';

export default function Home() {
  return (
    <div className='ca'>
          <Carousel fade interval={1000}>
        <Carousel.Item> 
          <img
            className="d-block w-100"
            src={car1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>First slide label</h1>
            <h1>Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={car1}
            alt="Second slide"
          />  <Carousel.Caption>
          <h1>Second slide label</h1>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Third slide label</h1>
          <h1>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
