import React, {useState} from "react";
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loding/Index.jsx";

/*** LOGIN COMPONENT ***/
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();
        const resultAction = await dispatch();
    }

    /*** Component Render ***/
    return (
        <main>
            <Container className="align-content-center heightDefault">
                <Loading active={loading} className="w-25 mx-auto"/>
                <div className="w-25 mx-auto px-4 pb-4 pt-2 rounded bg-success text-light">
                    <div className="mb-4">
                        <h1 className="display-6">Login</h1>
                    </div>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            {'E-mail'}
                            <FormGroup floating>
                                <Input id="email"
                                       name="email"
                                       placeholder="Email"
                                       type="email"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                                <Label for="email">
                                    Email
                                </Label>
                            </FormGroup>
                            {'Password'}
                            <FormGroup floating>
                                <Input id="password"
                                       name="password"
                                       placeholder="Password"
                                       type="password"
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}/>
                                <Label for="password">
                                    Password
                                </Label>
                            </FormGroup>
                            <Button color="light">
                                Login
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="w-25 mx-auto mt-3">
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Ops!</strong> Invalid email or password.
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default Login;