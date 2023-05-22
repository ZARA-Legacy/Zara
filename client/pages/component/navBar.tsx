import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from '../Sidebar';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="transparent" expand="lg" variant="light" className="navbares" fixed="top">
      
        <Sidebar  />
        <Container fluid>
        
          <Navbar.Brand href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png"
              style={{ marginLeft: "100px", width: "200px", height: "90px" }}
            />
          </Navbar.Brand>

        
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link
                href="/"
                style={{
                  color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "15px",
                  marginLeft: "50px",
                }}
              >
                
              </Nav.Link>
            </Nav>

            <div>
              <Nav.Link
                href="/search"
                style={{
                fontFamily: "Arial, Helvetica, sans-serif", fontSize: "17px",
                  marginRight: "60px",
                  //textDecoration: "underline",
                }}
              >
              
                Search
              </Nav.Link>
            </div>

            <div>
              <Nav.Link href="/login" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "15px" }}>
                SIGN IN
              </Nav.Link>
            </div>

            <div>
              <Nav.Link
                href="/details"
                style={{
                    fontFamily: "Arial, Helvetica, sans-serif", fontSize: "17px",
                  marginLeft: "70px",
                }}
              >
               Collection
              </Nav.Link>
            </div>
            <div>
            <Nav.Link
                href="/cart" 
            >
            <img 
              src="https://cdn.discordapp.com/attachments/1073948141822427256/1108700360891183175/aFtEKyQmH8K26qurE22yD-transformed.png"
              style={{ marginLeft: "40px", width: "40px", height: "40px" }}
            />
            </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;