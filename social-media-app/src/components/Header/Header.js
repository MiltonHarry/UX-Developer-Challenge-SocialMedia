import { Container, Navbar, NavItem, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="transparent">
                <Container>
                    <Navbar.Brand>
                        <h2>Social Media DashBoard</h2>
                        <p>Total Followers: 23,004</p>
                    </Navbar.Brand>
                    <NavItem className="justify-content-end"> 
                        <label>Dark Mode </label>
                        <button>The Toggle</button>
                    </NavItem>

                </Container>
            </Navbar>
        </Container>
    );
}

export default Header;