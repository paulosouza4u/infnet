import {Container} from "reactstrap";

export const Content = () => {
    return (
        <main>
            <Container>
                <div className="d-flex justify-content-around align-items-center flex-wrap py-5">
                    <div className="my_card text-center">
                        <div className="boll-home mx-auto"><i className="bi bi-people-fill"></i></div>
                        <h3 className="p-3">USERS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in orci mattis, sagittis diam id, lobortis enim. Proin augue ipsum.</p>
                    </div>
                    <div className="my_card text-center">
                        <div className="boll-home mx-auto"><i className="bi bi-send-fill"></i></div>
                        <h3 className="p-3">FEEDBACK</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in orci mattis, sagittis diam id, lobortis enim. Proin augue ipsum.</p>
                    </div>
                    <div className="my_card text-center">
                        <div className="boll-home mx-auto"><i className="bi bi-rocket-takeoff-fill"></i></div>
                        <h3 className="p-3">ABOUT</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in orci mattis, sagittis diam id, lobortis enim. Proin augue ipsum.</p>
                    </div>
                </div>
            </Container>
        </main>
    );
}