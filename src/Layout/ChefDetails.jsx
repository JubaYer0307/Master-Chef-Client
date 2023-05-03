import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

const ChefDetails = () => {
  const { id } = useParams();
  const [chef, setChef] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/main/${id}`)
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.log(error));
  }, [id]);

  console.log(id);

  return (
    <div>
      {chef && (
        <Container>
            <Card className="mb-4">
                
                <Card.Body>
                    <Card.Title>{chef.chefName}</Card.Title>
                    <Card.Img variant="top" src={chef.chefPicture} />
                    <Card.Text><p>
                    Years of experience: {chef.yearsOfExperience}</p>
                    <p>numberOfRecipes {chef.numberOfRecipes}</p>
                
                <div > <p>Likes: {chef.likes}</p>
                <p>shortBio: {chef.shortBio}</p></div>
                </Card.Text>
                </Card.Body> 
            </Card>
          {/* <h1>{chef.chefName}</h1>
          <p>Years of experience: {chef.yearsOfExperience}</p>
          <p>Number of recipes: {chef.numberOfRecipes}</p>
          <p>Likes: {chef.likes}</p> */}
        </Container>
      )}
    </div>
  );
};

export default ChefDetails;
