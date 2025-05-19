import {Container} from "reactstrap";

const Welcome = () => {
    const user = localStorage.getItem('lion_username');

    return (
        <Container className="align-content-center heightDefault">
            <div className="text-center">
                <h1 className="display-3">{`Welcome ${user}!`}</h1>
            </div>
        </Container>
    );
}

export default Welcome;