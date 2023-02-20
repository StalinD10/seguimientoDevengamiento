import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <div>
     <Navbar bg="light" expand="lg">
      <Container className='m-0'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/index">Inicio</Nav.Link>
            
            <Nav.Link href="/datosDocente">Datos Docente</Nav.Link>

            <NavDropdown title="Plan Devengamiento" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Solicitud de Finiquito</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="Actividad Devengamiento" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ingresar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Ver
              </NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navigation;
