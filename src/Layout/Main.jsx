import React, { useEffect, useState } from "react";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {

    const [chef, setChef] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/main')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

    },[])
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
