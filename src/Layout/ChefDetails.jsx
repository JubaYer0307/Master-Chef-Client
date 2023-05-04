import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import Recipies from "../Pages/Chefs/Recipies/Recipies";

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
              <Card.Text>
                <span>Years of experience: {chef.yearsOfExperience}</span>
                <span>numberOfRecipes {chef.numberOfRecipes}</span>
                <span>
                  Likes: {chef.likes}
                  <br />
                  shortBio: {chef.shortBio}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
         
        </Container>
      )}
      <Recipies></Recipies>
    </div>
  );
};

export default ChefDetails;
