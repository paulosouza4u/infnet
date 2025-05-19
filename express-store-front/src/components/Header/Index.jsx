import { Link } from "react-router";
import logotipo from "@image/lion-react.svg";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/slices/authSlice";
import {Container, Nav, NavItem, NavLink} from "reactstrap";

/*** HEADER COMPONENT ***/
 const Header = () => {

    const token = useSelector((state) => state.auth.token);
    const username = useSelector((state) => state.auth.username);
    const reduxDispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

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
                                { username === 'Admin' &&
                                    <NavItem>
                                        <NavLink className="link-dark fw-medium" tag={Link} to="/admin">ADMIN</NavLink>
                                    </NavItem>
                                }
                                <NavItem>
                                    <NavLink className="link-success" tag={Link} to="/">SHOP</NavLink>
                                </NavItem>
                                { token &&
                                    <>
                                        <NavItem>
                                            <NavLink className="link-success" tag={Link} to="/my-list">MY LIST</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="link-success" tag={Link} to="/my-cart">MY CART</NavLink>
                                        </NavItem>
                                    </>
                                }
                                { token ?
                                    <NavItem>
                                        <NavLink className="link-success" tag={Link} to="/login" onClick={() => reduxDispatch(logout())}>LOGOUT</NavLink>
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
                                                { cartItems ? cartItems.length : "0"}
                                            </span>
                                        </div>
                                    </NavLink>
                                </NavItem>
                                { token &&
                                    <div className="ms-2 mt-2 text-dark fw-medium border-start border-dark ps-3">
                                        <small>Hello, {username}!</small>
                                    </div>
                                }
                            </Nav>
                        </div>
                    </div>
                </Container>
            </Container>
        </header>
    );
}

export default Header;