import React, {useState} from "react";
import {Alert, Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loding/Index";
import {loginsAsync} from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

/*** LOGIN COMPONENT ***/
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onDismiss = () => setVisible(false);

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        const resultAction = await dispatch(loginsAsync({ username, password }));
        if (loginsAsync.fulfilled.match(resultAction)) {
            setLoading(false);
            navigate("/welcome");
        } else {
            setLoading(false);
            setVisible(true);
            console.log("Login fail: ", resultAction.error);
        }
    }

    /**** REFAZER EXIBICAO VALIDACAO *****/

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
                            {'Username'}
                            <FormGroup floating>
                                <Input required
                                       id="username"
                                       name="username"
                                       placeholder="Username"
                                       type="text"
                                       value={username}
                                       onChange={(e) => setUsername(e.target.value)}/>
                                <Label for="username">
                                    Username
                                </Label>
                            </FormGroup>
                            {'Password'}
                            <FormGroup floating>
                                <Input required
                                       id="password"
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
                <div className="w-25 text-center mx-auto border rounded mt-3">
                    <small className="text-light">use <strong>kevinryan</strong> and <strong>kev02937@</strong> to test.</small>
                </div>
                <div className="w-25 mx-auto mt-3">
                    <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                        <strong>Username</strong> or <strong>password</strong> is incorrect.
                    </Alert>
                </div>
            </Container>
        </main>
    );
}

export default Login;