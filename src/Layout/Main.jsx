import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const Main = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/main")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(chefs);

  const chefCards = chefs.map((chef) => (
    <Col key={chef.id} lg={4} md={6} className="mb-4">
      <Card>
        <Card.Img variant="top" src={chef.chefPicture} />
        <Card.Body>
          <Card.Title>{chef.chefName}</Card.Title>
          <Card.Text>
            Years of experience: {chef.yearsOfExperience}
            <br />
            Number of recipes: {chef.numberOfRecipes}
            <br />
            Likes: {chef.likes}
          </Card.Text>
          <Link to={{ pathname: `/chef/${chef.id}`, state: { chefs: chefs } }}>


            <Button variant="primary">View recipes</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  ));

  const rows = [];

  for (let i = 0; i < chefCards.length; i += 3) {
    rows.push(<Row key={i}>{chefCards.slice(i, i + 3)}</Row>);
  }

  return (
    <div>
      <Header></Header>
      <Container>{rows}</Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
