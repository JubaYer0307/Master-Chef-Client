import React, { useContext } from "react";
import superfood from "../../../assets/superfood.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";



const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error))
    }

    
  return (
    <div>
      <div className="text-center">
        <img src={superfood} alt="" />
      </div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Superfood</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"> <div><Link to={`/#`}>Home</Link></div> </Nav.Link>
              <Nav.Link href="blog">Blog</Nav.Link>
              
            </Nav>
            <Nav>
              {user && <Nav.Link href="#deets"><FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>{user.displayName}
              </Nav.Link>}
              <Nav.Link eventKey={2} href="#memes">
                { user ? 
                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                <Link to="/login"><Button variant="secondary">Login</Button></Link>
                }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
