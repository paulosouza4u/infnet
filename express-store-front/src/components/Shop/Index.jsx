import Loading from "../Loding/Index.jsx";
import React, {useEffect, useState} from "react";
import {fetchProducts} from "../../services/apiProducts.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../redux/slices/cartSlice";
import {Alert, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import {fetchProductsAsync} from "../../redux/slices/productSlice.jsx";

/*** Filter ***/
export const Select = (props) => {

    const uniqueCategories = [...new Set(props.products.map(item => item.category))];

    /*** Component Render ***/
    return (
        <FormGroup>
            {props.products.length > 0 ? (
                <>
                    <Label for="regionSelect">Select Category<span className="text-danger">*</span></Label>
                    <Input id="regionSelect"
                           bsSize="lg"
                           name="select"
                           type="select"
                           onChange={(e) => {
                               props.setFilter !== undefined && props.setFilter(e.target.value);
                           }}>
                        <option value="">Select...</option>
                        {uniqueCategories.length > 0 && (
                            <>
                                {uniqueCategories.map((category, index) => (
                                    <option key={index}>{category}</option>
                                ))}
                            </>
                        )}
                    </Input>
                </>
            ) : (
                <Alert color="secondary">
                    Que pena. A lista de categoria esta vazia! =/
                </Alert>
            )}
        </FormGroup>
    );
}

/*** SHOP COMPONENT ***/
const Shop = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);

    const [modalOpen, setModalOpen] = useState(false);
    const [productSelected, setProductSelected] = useState(null);
    const [filter, setFilter] = useState("");

    const toggleModal = () => setModalOpen(!modalOpen);
    const handleModal = (product) => {
        setProductSelected(product);
        toggleModal();
    }
    const productsFilter = products.length > 0 && (
        products.filter((itens) => itens.category.toLowerCase().includes(filter.toLowerCase()))
    );

    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);

    /*** Component Render ***/
    return (
        <main>
            <Container className="heightDefault">
                <div>
                    <Form>
                        <div className="rounded mt-5 p-3 border" style={{maxWidth: "30rem"}}>
                            <Select products={products} setFilter={setFilter}/>
                        </div>
                    </Form>
                </div>
                <Loading active={status === 'loading'} className="mt-5"/>
                <div className="d-flex flex-wrap justify-content-between py-5">
                    {productsFilter.length > 0 ? (
                            productsFilter.map((product, index) => (
                                <div key={index}>
                                    <div className="card mb-5" style={{ width: '18rem' }}>
                                        <img src={`http://localhost:3000/uploads/${product.image}`} className="img-fluid img-thumbnail card-img-top shop-img-card" alt=""/>
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