import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Main.css";
import Banner from "./Banner";
import TwoMoreSection from "./twoMoreSection";
import { Fragment } from "react";
import LazyLoad from "react-lazy-load";

const Main = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://superfood-server-jubayer0307.vercel.app/main")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const chefCards = chefs.map((chef) => (
    <Col key={chef.id} xs={12} lg={4} md={6} className="mb-4 mt-3">
      <Card style={{ height: "auto" }}>
        <LazyLoad>
          <Card.Img
            variant="top"
            src={chef.chefPicture}
            className="img-fluid"
            style={{ objectFit: "cover", height: "250px" }}
          />
        </LazyLoad>
        <Card.Body>
          <Card.Title>{chef.chefName}</Card.Title>
          <Card.Text>
            Years of experience: {chef.yearsOfExperience}
            <br />
            Number of recipes: {chef.numberOfRecipes}
            <br />
            Likes: {chef.likes}
          </Card.Text>
          <Link
            to={{ pathname: `/chef/${chef.id}`, state: { chefs: chefs } }}
          >
            <Button variant="primary" className="button-primary">
              View recipes
            </Button>
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
    <div className="main">
      
      {loading ? (
        <div className="d-flex justify-content-center align-items-center loader">
          <Spinner animation="border" variant="primary" size="lg" />
        </div>
      ) : (
        <div>
          <Header></Header>
          <Banner></Banner>
          <Container>{rows}</Container>
          <TwoMoreSection></TwoMoreSection>
          <Footer></Footer>
        </div>
      )}
      
    </div>
  );
};

export default Main;
