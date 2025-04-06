import {Container} from "reactstrap";
import React from "react";
import {useSelector} from "react-redux";

/*** CART COMPONENT ***/
const MyCart = () => {

    const cart = useSelector((state) => state.cart);
    console.log(cart);

    /*** Component Render ***/
    return (
        <main>
            <Container className="heightDefault">
                <div className="w-75 mx-auto mt-5 px-4 pb-4 pt-2 rounded bg-success text-light mb-5">
                    <div className="mb-4">
                        <h1 className="display-6">My Cart</h1>
                    </div>
                    <div className="debug">
                        { cart.length !== 0 ? (
                            cart.map((item) => (
                                <div key={item.id} className="d-flex p-2 justify-content-between border-bottom border-light">
                                    <div className="d-flex align-items-center w-75">
                                        <img src={item.image} className="img-fluid img-thumbnail card-img-top cart-image" alt=""/>
                                        <p className="fs-5 ms-4">{item.title}</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-around w-25 border-start debug">
                                        <p className="text-center fs-5 ms-3">{item.quantity}</p>
                                        <p className="text-center fs-5 ms-3">$ {item.price}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>"Your cart is empty."</p>
                        )}
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default MyCart;