import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import Recipies from "../Pages/Chefs/Recipies/Recipies";
import Header from "../Pages/Shared/Header/Header";



const ChefDetails = () => {
  const { id } = useParams();
  const [chef, setChef] = useState(null);

  useEffect(() => {
    fetch(`https://superfood-server-jubayer0307.vercel.app/main/${id}`)
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.log(error));
  }, [id]);

  console.log(id);

  return (
    <>
      <Header />
      <div>
        {chef && (
          <Container>
            <Card className="mb-4" style={{ width: "100%", maxWidth: '100%', height: 'auto'}}>
              <div style={{ display: "flex" , width: "70%", marginLeft: '200px'}}>
                <div style={{ flex: 1 }}>
                  <Card.Body>
                    <Card.Title>{chef.chefName}</Card.Title>
                    
                    <Card.Img variant="top" src={chef.chefPicture} />
                    
                  </Card.Body>
                </div>
                <div style={{ flex: 1, width: "50%" , marginTop: '100px' }}>
                  <Card.Text>
                    <p>Years of experience: {chef.yearsOfExperience}</p>
                    <p>Number Of Recipes: {chef.numberOfRecipes}</p>
                    <p style={{ textAlign: 'justify' }}>
                      Likes: {chef.likes}
                      <br />
                      Bio: {chef.shortBio}
                    </p>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Container>
        )}
        <Recipies />
      </div>
    </>
  );
};

export default ChefDetails;
