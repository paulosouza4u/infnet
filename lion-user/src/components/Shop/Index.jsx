import {Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Container} from "reactstrap";
import React, {useEffect, useState} from "react";
import {fetchProducts} from "../services/apiShop.jsx";

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const products = await fetchProducts();
                setProducts(products);

                console.log(products);
            } catch (error) {
                console.log(error.message);
            } finally {
                //Loading FALSE
            }
        }
        getProducts();
    }, []);

    return (
        <Container className="heightDefault">
            <div className="d-flex flex-wrap justify-content-between py-5">
                {products.length > 0 ? (
                        products.map((product, index) => (
                            <div key={index}>
                                <div className="card mb-5" style={{ width: '18rem' }}>
                                    <img src={product.image} className="img-fluid img-thumbnail card-img-top shop-img-card" alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text"><b>$ {product.price}</b></p>
                                        <a href="#" className="btn btn-sm btn btn-success">Adicionar ao carrinho</a>
                                        <a href="#" className="card-link ms-4">Detalhes</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) :
                    <p>Não há produtos para ser exibido.</p>
                }
            </div>
        </Container>
    );
}

export default Shop;