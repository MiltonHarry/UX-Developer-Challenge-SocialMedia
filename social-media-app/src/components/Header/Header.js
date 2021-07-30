import { Container, Navbar, NavItem, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from 'react-switch'

function Header(props) {

    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="transparent">
                <Container>
                    <Navbar.Brand>
                        <h2>Social Media DashBoard</h2>
                        <div className="nav-text">Total Followers: 23,004</div>
                    </Navbar.Brand>
                    <NavItem className="justify-content-end"> 
                        <label className="nav-text">Dark Mode </label>
                        <Switch
                            onChange={() => props.toggleTheme()}
                            //checked={}
                            className="react-switch"
                            checkedIcon={false}
                            uncheckedIcon={false}/>
                    </NavItem>
                </Container>
            </Navbar>
        </Container>
    );
}

export default Header;