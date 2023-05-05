import React, { useContext, useState } from "react";
import superfood from "../../../assets/superfood.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import './Header.css'
import { NavLink } from "react-router-dom";


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
 

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  
  

  const navLinkStyles = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      TextDecoration: isActive ? 'none' : 'underline',
      backgroundImage: isActive ? 'linear-gradient(to bottom, #90EE90, #4dbd74)' : '',
      borderRadius: isActive ? '05px' : ''

    }
    
  }

  return (
    <div className="header">
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
        <Container>
        <Navbar.Brand href="#home" style={{ color: 'black' }}>
  <img
    src={superfood}
    alt=""
    style={{
      width: "100%", /* make the image width 100% of its container */
      maxWidth: "150px", /* set a maximum width for the image */
    }}
  />
</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink style={navLinkStyles} to='/#'>Home</NavLink>
              <NavLink style={navLinkStyles} to='/blog'>Blog</NavLink>
              
            </Nav>
            <Nav>
              {user && user.photoURL ? (
                <Nav.Link href="#deets">
                  <div className="user-info">
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="user-name">{user.displayName}</div>
                  </div>
                </Nav.Link>
              ) : (
                <Nav.Link>
                  
                </Nav.Link>
              )}
              <Nav.Link eventKey={2} href="#memes">
                {user ? (
                  <Button onClick={handleLogOut} variant="secondary">
                    Logout
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
