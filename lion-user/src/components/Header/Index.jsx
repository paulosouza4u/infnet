import {Container, Navbar, NavbarBrand} from "reactstrap";
import logotipo from "@image/lion-react.svg";

const Header = () => {

    return (
        <header>
            <nav>
                <Container className="bg-light border" fluid>
                    <Container>
                        <div className="header">
                            <div className="d-flex align-items-center justify-content-between h-100">
                                <div className="d-flex align-items-center">
                                    <img src={logotipo} alt="logotipo" className="img-fluid me-3"/>
                                    <h1 className="display-6">Lion User</h1>
                                </div>
                                <div className="d-flex">
                                    <div className="d-flex align-items-center">
                                        <h5 className="me-4">Minha Lista</h5>
                                        <h5 className="me-4">Meu Carrinho</h5>
                                        <h5 className="me-5">Login</h5>
                                    </div>
                                    <div className="rounded position-relative bg-success px-2 py-1">
                                        <i className="bi bi-bag-heart-fill text-light fs-5"></i>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            5
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Container>
            </nav>
        </header>
    );
}

export default Header;