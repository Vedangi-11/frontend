import React ,{useState} from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
export default function Na() {
    const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleSelect = () => setExpanded(false);
  return (
    <div>
        <Navbar bg="light" expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand href="#home">BrandName</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" onSelect={handleSelect}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
