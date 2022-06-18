import { Nav } from 'react-bootstrap';
import "./NavBar.css";

function NavBar () {
    return (
        <div>            
            <Nav>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">About me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">My values</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">My projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Contacts</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default NavBar;