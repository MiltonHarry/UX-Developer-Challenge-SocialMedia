import { useState } from "react";
import { Container, Navbar, NavItem, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from 'react-switch'

const Header = (props) => {

    const totalFollowers = "23,004"

    const [toggleState, setToggleState] = useState(false);

    const handleToggle = () => {
        setToggleState(!toggleState);
        props.toggleTheme();
    }

    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="transparent">
                <Container>
                    <Navbar.Brand>
                        <h2>Social Media DashBoard</h2>
                        <div className="nav-text">Total Followers: {totalFollowers}</div>
                    </Navbar.Brand>
                    <NavItem className="justify-content-end">
                        <label htmlFor="switch" className="nav-text">Dark Mode </label>
                        <div className="switch-container">
                            <Switch
                                id="switch"
                                onChange={handleToggle}
                                checked={toggleState}
                                className="react-switch"
                                checkedIcon={false}
                                uncheckedIcon={false}
                                offColor='#AEB3CB'
                                onColor='#3eda82'
                                offHandleColor='#f5f7ff'
                                onHandleColor='#1f212e' />
                        </div>
                    </NavItem>
                </Container>
            </Navbar>
        </Container>
    );
}

export default Header;