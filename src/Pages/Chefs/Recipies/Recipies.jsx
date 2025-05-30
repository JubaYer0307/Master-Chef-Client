import React from 'react';
import { Col, Row, Container, Toast } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import './Recipes.css'


const toastStyle = {
    position: 'fixed',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    zIndex: 9999,
    minWidth: '300px',
    maxWidth: '500px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    background: 'linear-gradient(to right, #00cc99, #33cc99, #66cc99, #99cc99)',
};
    
   
        
  


const Recipies = () => {

  const [recipie, setRecipie] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    fetch("https://superfood-server-jubayer0307.vercel.app/recipies")
      .then((res) => res.json())
      .then((data) => setRecipie(data))
      .catch((error) => console.log(error));
  }, []);

  const handleFavoriteClick = (id, name) => {
    setFavoriteRecipes((prev) => [...prev, { id, name }]);
  };

  const recipieCards = Array.isArray(recipie) && recipie.map((recipie) => {
    const isFavorite = favoriteRecipes.some(recipe => recipe.id === recipie.id);
    return (
      <Col key={recipie.id} lg={4} md={6} className="mb-4">
        <Card style={{ textAlign: 'justify' }}>
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
            {/* <Button 
              variant="primary" 
              onClick={() => handleFavoriteClick(recipie.id, recipie.name)} 
              disabled={isFavorite}
            >
              {isFavorite ? 'Added' : 'Add to Favorite'}
            </Button> */}
          </Card.Body>
        </Card>
      </Col>
    );
  });

  const rows = [];

  for (let i = 0; i < recipieCards.length; i += 3) {
    rows.push(<Row key={i}>{recipieCards.slice(i, i + 3)}</Row>);
  }

  return (
    <>
    
    <div>
      <Container className='recipesCard'>{rows}</Container>
      <Toast show={favoriteRecipes.length > 0} onClose={() => setFavoriteRecipes([])} style={toastStyle}>
        <Toast.Header>
          <strong className="mr-auto">Favorite Recipes</strong>
        </Toast.Header>
        <Toast.Body>
          {favoriteRecipes.map(recipe => (
            <div key={recipe.id}> ({recipe.name}) is now your favorite!</div>
          ))}
        </Toast.Body>
      </Toast>
    </div>
    <Footer />
    </>
  );
};

export default Recipies;
