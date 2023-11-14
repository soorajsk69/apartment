import React, { useEffect, useState } from 'react';
import ApartCard from './ApartCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Apartment() {
  const [apartmentList, setApartment] = useState([]);

  const fetchData = async () => {
    const result = await fetch('/apartment.json');
    result.json().then(
      data => {
        setApartment(data.apartments);
      }
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row>
      {apartmentList.map(item => (
        <Col key={item.id} md={4}>
          <ApartCard apartdata={item} />
        </Col>
      ))}
    </Row>
  );
}
