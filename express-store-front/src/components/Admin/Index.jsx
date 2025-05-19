import {Button, Container} from "reactstrap";
import React, {useEffect, useState} from "react";
import {fetchProducts} from "../../services/apiShop.jsx";
import Loading from "../Loding/Index.jsx";

/*** CART COMPONENT ***/
const Admin = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);
                const products = await fetchProducts();
                setProducts(products);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        }
        getProducts();
    }, []);

    /*** Component Render ***/
    return (
        <main>
            <Container className="heightDefault">
                <div className="w-100 mx-auto mt-5 p-5 pb-5 pt-3 rounded bg-success text-light mb-5">
                    <div className="mb-4">
                        <h1 className="display-6">Shop Edit</h1>
                    </div>
                    <Loading active={loading} className="mt-5"/>
                    <div className="mb-4">
                        { products && (
                            products.map((item) => (
                                <div key={item.id} className="d-flex py-2 justify-content-between border-bottom border-light">
                                    <div className="d-flex align-items-center w-75">
                                        <img src={`http://localhost:3000/uploads/${item.image}`} className="img-fluid img-thumbnail card-img-top cart-image" alt=""/>
                                        <p className="fs-5 ms-4">{item.title}</p>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center border-start w-25">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="d-flex align-items-center">
                                                <small className="ms-2">Stock.</small>
                                                <input className="rounded fw-medium w-50 form-control form-control-sm ms-2"
                                                       type="number"
                                                       value={item.stock}
                                                       onChange={(e) => {}}
                                                       min="1"/>
                                            </span>
                                            <span className="d-flex align-items-center">
                                                <small className="mx-2">Price:</small> ${item.price}
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-end">
                                            <button className="btn btn-sm btn-warning" onClick={() => {}}><i className="bi bi-pencil-square"></i></button>
                                            <button className="btn btn-sm btn-danger ms-2" onClick={() => {}}><i className="bi bi-trash"></i></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        <div>
                            <button className="btn btn-warning" onClick={() => {}}>Add Product</button>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default Admin;