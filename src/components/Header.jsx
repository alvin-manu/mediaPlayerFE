import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar className="bg-dark p-3">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{textDecoration:"none", color:"white"}}>
              <i class="fa-solid fa-video me-3 text-primary fa-fade"></i>
              Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
