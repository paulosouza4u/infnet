import {Container} from "reactstrap";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, updateQuantity} from "../../redux/slices/cartSlice";

/*** CART COMPONENT ***/
const MyCart = () => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleQuantityChange = (id, newQuantity) => {
        dispatch(updateQuantity({ id, quantity: parseInt(newQuantity) }));
    };

    useEffect(() => {
        localStorage.setItem('lion_cart', JSON.stringify(cart));
    }, [cart]);

    /*** Component Render ***/
    return (
        <main>
            <Container className="heightDefault">
                <div className="w-100 mx-auto mt-5 p-5 pb-5 pt-3 rounded bg-success text-light mb-5">
                    <div className="mb-4">
                        <h1 className="display-6">My Cart</h1>
                    </div>
                    <div className="mb-4">
                        { cart.length !== 0 ? (
                            cart.map((item) => (
                                <div key={item.id} className="d-flex p-2 justify-content-between border-bottom border-light">
                                    <div className="d-flex align-items-center w-75">
                                        <img src={item.image} className="img-fluid img-thumbnail card-img-top cart-image" alt=""/>
                                        <p className="fs-5 ms-4">{item.title}</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between px-3 w-25 border-start">
                                        <input className="rounded fw-medium w-25 form-control"
                                               type="number"
                                               value={item.quantity}
                                               onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                               min="1"/>
                                        <p className="text-center fs-5 ms-3"><small>Price:</small> ${item.price}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <button className="btn btn-danger" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <button className="btn btn-warning">Checkout</button>
                            <h5 className="ms-3">Total: $00</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default MyCart;