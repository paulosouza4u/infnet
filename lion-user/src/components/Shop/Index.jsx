import Loading from "../Loding/Index.jsx";
import React, {useEffect, useState} from "react";
import {fetchProducts} from "../../Services/apiShop";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/slices/cartSlice";
import { Container, Modal, ModalBody, ModalHeader } from "reactstrap";

/*** SHOP COMPONENT ***/
const Shop = () => {

    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [productSelected, setProductSelected] = useState(null);

    const toggleModal = () => setModalOpen(!modalOpen);
    const handleModal = (product) => {
        setProductSelected(product);
        toggleModal();
    }

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
                <Loading active={loading} className="mt-5"/>
                <div className="d-flex flex-wrap justify-content-between py-5">
                    {products.length > 0 ? (
                            products.map((product, index) => (
                                <div key={index}>
                                    <div className="card mb-5" style={{ width: '18rem' }}>
                                        <img src={product.image} className="img-fluid img-thumbnail card-img-top shop-img-card" alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">Category: <b>{product.category}</b></p>
                                            <p className="card-text">Price:<b> $ {product.price}</b></p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <a className="btn btn-sm btn btn-success" onClick={() => dispatch(addToCart(product))}>Add to Cart</a>
                                                <a className="card-link text-success details" onClick={() => handleModal(product)}><i className="bi bi-search-heart me-1"></i>Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) :
                        <p>Não há produtos para ser exibido.</p>
                    }
                </div>
            </Container>
            <Modal isOpen={modalOpen} toggle={toggleModal} centered>
                <ModalHeader toggle={toggleModal}><i className="bi bi-search-heart me-1"></i>Details</ModalHeader>
                <ModalBody>
                    {productSelected && (
                        <>
                            <h4>
                                {productSelected.title}
                            </h4>
                            <p><em>
                                {productSelected.description}
                            </em></p>
                        </>
                    )}
                </ModalBody>
            </Modal>
        </main>
    );
}

export default Shop;