import {Container, Nav, NavItem, NavLink} from "reactstrap";
import { Link } from "react-router";
import logotipo from "@image/lion-react.svg";


/*** HEADER COMPONENT ***/
 const Header = () => {

    const token = false;

    /*** Component Render ***/
    return (
        <header>
            <Container className="bg-light border" fluid>
                <Container>
                    <div className="header">
                        <div className="d-flex align-items-center justify-content-between h-100">
                            <div className="d-flex align-items-center">
                                <img src={logotipo} alt="logotipo" className="img-fluid me-3"/>
                                <h1 className="display-6">Lion User</h1>
                            </div>
                            <Nav>
                                <NavItem>
                                    <NavLink className="link-success" tag={Link} to="/">SHOP</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="link-success" tag={Link} to="/my-lists">MY LISTS</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="link-success" tag={Link} to="/my-cart">MY CART</NavLink>
                                </NavItem>
                                { token ?
                                    <NavItem>
                                        <NavLink className="link-success" tag={Link} to="/login" onClick={() => {}}>LOGOUT</NavLink>
                                    </NavItem>
                                    :
                                    <NavItem>
                                        <NavLink className="link-success" tag={Link} to="/login">LOGIN</NavLink>
                                    </NavItem>
                                }
                                <NavItem>
                                    <NavLink className="link-success" tag={Link} to="/my-cart">
                                        <div className="rounded position-relative bg-success px-1">
                                            <i className="bi bi-bag-heart-fill text-light fs-6"></i>
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                5
                                            </span>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                </Container>
            </Container>
        </header>
    );
}

export default Header;