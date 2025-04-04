import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-light fw-bold">
            <img
              alt=""
              src="https://media2.giphy.com/media/z1HdiobjzYIrm/200w.gif?cid=6c09b9525asb7xwqvwd6ffhnivohgq8ak32r2gx8dbbrthwc&ep=v1_gifs_search&rid=200w.gif&ct=g"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />{" "}
            Counter app
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
