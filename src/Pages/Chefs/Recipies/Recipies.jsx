import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


const Recipies = () => {

    const [recipie, setRecipie] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/recipies")
        .then((res) => res.json())
        .then((data) => setRecipie(data))
        .catch((error) => console.log(error));
    }, []);

    const recipieCards = Array.isArray(recipie) && recipie.map((recipie) => (
        <Col key={recipie.id} lg={4} md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src={recipie.recipiePicture} />
            <Card.Body>
              <Card.Title>{recipie.name}</Card.Title>
              <Card.Text>
                Ingredients: {recipie.ingredients}
                <br />
                Method: {recipie.method}
                <br />
                Rating: {recipie.rating}
              </Card.Text>
              <Link to={`/#`}>
                <Button variant="primary">Add to Favorite</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ));
    
      const rows = [];
    
      for (let i = 0; i < recipieCards.length; i += 3) {
        rows.push(<Row key={i}>{recipieCards.slice(i, i + 3)}</Row>);
      }
    
      return (
        <div>
          
          <Container>{rows}</Container>
          
        </div>
      );
    };

export default Recipies;