import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
    return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Sua Empresa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cadastro" id="collasible-nav-dropdown">
              <NavDropdown.Item ><Link to="/Products">Produtos</Link></NavDropdown.Item>
              <NavDropdown.Item >
                <Link to="/Frentista">Frentista</Link>
              </NavDropdown.Item>
              <NavDropdown.Item ><Link to="/Clientes">Clientes</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              Suporte
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Dashboard</Nav.Link>
            <Nav.Link href="#pricing">Relatorios</Nav.Link>
            <Nav.Link href="#pricing">Pedidos</Nav.Link>
            <Nav.Link href="#pricing"><Link to="/Login">Login Teste</Link></Nav.Link>
          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    )
}

export default Header

