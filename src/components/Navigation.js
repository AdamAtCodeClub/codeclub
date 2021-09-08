import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';


export default function Navigation(){
    return (
        <Navbar className="nav" expand="sm">
            <Navbar.Brand href="/"><img src="images/logo.png" alt="logo" className="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Learn To Code" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/whats-on">What's On</NavDropdown.Item>
                        <NavDropdown.Item href="/coding-resources">Coding Resources</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://scratch.mit.edu" target="_blank">Scratch</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Help us Grow" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/our-projects">Our Projects</NavDropdown.Item>
                        <NavDropdown.Item href="/volunteer">Volunteer</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/our-mission">Our Mission</Nav.Link>
                </Nav>
            </Navbar.Collapse>
      </Navbar>
    )
}