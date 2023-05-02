import React from "react";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        
        <Row>
          <Col lg={12}>Main content</Col>
         
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
