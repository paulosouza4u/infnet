import logotipo from "@image/lion-react.svg";
import { Link } from "react-router";
import {Nav, NavItem, NavLink} from "reactstrap";
import {Container} from "reactstrap";
import {useState} from "react";

export const Header = () => {

    const [pageName, setPageName] = useState('');

    return (
        <header>
            <div className="header">
                <div className="d-flex justify-content-center h-100">
                    <img src={logotipo} alt="logotipo" className="img-fluid position-absolute mt-4"/>
                </div>
            </div>
            <nav>
                <Container>
                    <div className="d-flex justify-content-between align-items-center mt-5 mb-2 fw-bold">
                        <div className="link-warning fs-4 site_title">
                            lion form app
                        </div>
                        <div className="fs-5 site_nav">
                            <Nav >
                                <NavItem>
                                    <NavLink className="link-success" tag={Link} to="/" onClick={() => setPageName('')}>home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="link-success" tag={Link} to="/users" onClick={() => setPageName('users')}>users</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="link-success" tag={Link} to="/feedback" onClick={() => setPageName('feedback')}>feedback</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="link-success" tag={Link} to="/about" onClick={() => setPageName('about')}>about</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                    <div className="mb-2"><small><span className="text-secondary">home /</span> {pageName}</small></div>
                </Container>
            </nav>
        </header>
    );
}