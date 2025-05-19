import {Container, Modal, ModalBody, ModalHeader} from "reactstrap";
import React, {useEffect, useState} from "react";
import {deleteProduct} from "../../services/apiProducts.jsx";
import Loading from "../Loding/Index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsAsync} from "../../redux/slices/productSlice";

/*** CART COMPONENT ***/
const Admin = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);
    const [modalOpen, setModalOpen] = useState(false);
    const [productSelected, setProductSelected] = useState(null);

    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);

    const toggleModal = () => setModalOpen(!modalOpen);
    const handleModal = (product) => {
        setProductSelected(product);
        toggleModal();
    }

    const handleDelete = async (prop) => {
        try {
            await deleteProduct(prop);
            console.log(`Produto ID ${prop} deletado com sucesso.`);
            dispatch(fetchProductsAsync());
        } catch (error) {
            console.log(`Falha ao deletar o produto ID ${prop}.` + error.message)
        }
    }

    /*** Component Render ***/
    return (
        <main>
            <Container className="heightDefault">
                <div className="w-100 mx-auto mt-5 p-5 pb-5 pt-3 rounded bg-success text-light mb-5">
                    <div className="mb-4">
                        <h1 className="display-6">Shop Edit</h1>
                    </div>
                    <Loading active={status === 'loading'} className="mt-5"/>
                    <div className="mb-4">
                        { products && (
                            products.map((item) => (
                                <div key={item.id} className="d-flex py-2 justify-content-between border-bottom border-light">
                                    <div className="d-flex align-items-center w-75">
                                        <img src={`http://localhost:3000/uploads/${item.image}`} className="img-fluid img-thumbnail card-img-top cart-image" alt=""/>
                                        <p className="fs-5 ms-4">{item.title}</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-around border-start w-25">
                                        <span className="d-flex align-items-center">
                                                <small className="me-1">Stock:</small>{item.stock}
                                            </span>
                                        <span className="d-flex align-items-center">
                                                <small className="me-1">Price:</small> ${item.price}
                                            </span>
                                        <button className="btn btn-sm btn-warning" onClick={() => handleModal(item)}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}>
                                            <i className="bi bi-trash"></i>
                                        </button>
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
            <Modal isOpen={modalOpen} toggle={toggleModal} centered scrollable>
                <ModalHeader toggle={toggleModal}><i className="bi bi-pencil-square me-1"></i>Edit Product</ModalHeader>
                <ModalBody>
                    {productSelected && (
                        <>
                            <form>
                                <div className="px-3 mb-3">
                                    <div className="mb-3">
                                        <label htmlFor="inputTitle" className="form-label text-success">Title</label>
                                        <input type="text"
                                               className="form-control form-control-sm"
                                               id="inputTitle"
                                               value={productSelected.title}
                                               onChange={() => {
                                               }}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputDescription"
                                               className="form-label text-success">Description</label>
                                        <textarea className="form-control form-control-sm"
                                                  id="inputDescription"
                                                  rows="3"
                                                  value={productSelected.description}
                                                  onChange={() => {
                                                  }}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputCategory"
                                               className="form-label text-success">Category</label>
                                        <input className="form-control form-control-sm"
                                               id="inputCategory"
                                               value={productSelected.category}
                                               onChange={() => {
                                               }}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputBrand" className="form-label text-success">Brand</label>
                                        <input className="form-control form-control-sm"
                                               id="inputBrand"
                                               value={productSelected.brand}
                                               onChange={() => {
                                               }}/>
                                    </div>
                                    <div className="d-flex justify-content-between w-100">
                                        <div className="w-25 mb-3">
                                            <label htmlFor="inputStock"
                                                   className="form-label text-success">Stock</label>
                                            <input className="form-control form-control-sm"
                                                   id="inputStock"
                                                   value={productSelected.stock}
                                                   onChange={() => {
                                                   }}/>
                                        </div>
                                        <div className="w-25 mb-3">
                                            <label htmlFor="inputBrand"
                                                   className="form-label text-success">Price</label>
                                            <input className="form-control form-control-sm"
                                                   id="inputBrand"
                                                   value={productSelected.price}
                                                   onChange={() => {
                                                   }}/>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-start mb-3">
                                        <label htmlFor="image" className="form-label text-success">Image</label>
                                        <img src={`http://localhost:3000/uploads/${productSelected.image}`}
                                             className="img-fluid img-thumbnail cart-image-edit" alt="Product image"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="file"
                                               className="form-control"
                                               id="inputGroupFile01"
                                               onChange={() => {}}/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="d-flex align-items-center justify-content-end mt-3">
                                <button type="submit" className="btn btn-sm btn-warning">Save edit</button>
                                </div>
                            </form>
                        </>
                    )}
                </ModalBody>
            </Modal>
        </main>
    );
}

export default Admin;