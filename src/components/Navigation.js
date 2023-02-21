import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Navigation() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="m-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/index">Inicio</Nav.Link>

              <Nav.Link href="/datosDocente">Datos Docente</Nav.Link>

              <NavDropdown title="Plan Devengamiento" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleShow}>
                  Solicitud de Finiquito
                </NavDropdown.Item>
              </NavDropdown>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Solicitud de Devengamiento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Cuando se solicita un finiquito, no se podrá ya registrar
                    más periodos ni actividades de devengamiento.
                  </p>

                  <p>
                    Ten en cuenta que una vez solicitado el finiquito, se
                    revisará todos los planes y actividades registradas.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                  <Button variant="primary">Enviar Solicitud</Button>
                </Modal.Footer>
              </Modal>
              <NavDropdown
                title="Actividad Devengamiento"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Ingresar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Ver</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/">Cerrar Sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
