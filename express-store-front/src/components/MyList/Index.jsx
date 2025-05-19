import React, {useEffect, useState} from "react";
import {Container} from "reactstrap";
import Loading from "../Loding/Index.jsx";
import {fetchProducts} from "../../services/apiProducts.jsx";

/*** CART COMPONENT ***/
const Index = () => {

    const [headingInput, setHeadingInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [listInputs, setListInputs] = useState({});
    const [loading, setLoading] = useState(true);

    const handleAddTodo = () => {
        if(headingInput.trim() !== '') {
            setTodos([
                ...todos,
                {heading: headingInput, listInputs: []}
            ]);
            setHeadingInput('');
        }
    };

    const handleListInputChange = (index, value) => {
        setListInputs({...listInputs, [index]: value})
    }

    const handleAddList = (index) => {
        if (listInputs[index] && listInputs[index].trim() !== ''){
            const newTodos = [...todos];
            newTodos[index].listInputs.push(listInputs[index]);
            setTodos(newTodos);
            setListInputs({ ...listInputs, [index]: ''});
            localStorage.setItem('lion_list', JSON.stringify(newTodos));
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        localStorage.setItem('lion_list', JSON.stringify(newTodos));
    }

    useEffect(() => {
        const localTodos = JSON.parse(localStorage.getItem('lion_list'));
        if (!localTodos || localTodos.length === 0) {
            const getProducts = async () => {
                try {
                    setLoading(true);
                    const products = await fetchProducts();
                    const categories = [...new Set(products.map(item => item.category))];
                    categories.length > 0 && setTodos(categories.map(category => ({heading: category, listInputs: []})));
                } catch (error) {
                    console.log(error.message);
                } finally {
                    setLoading(false);
                }
            }
            getProducts();
        } else {
            setTodos(localTodos);
            setLoading(false);
        }
    }, [])

    /*** Component Render ***/
    return (
        <main>
            <Container className="heightDefault">
                <div className="mt-5">
                    <div className="input-group mb-4 w-50 mx-auto">
                        <input type="text"
                               className="form-control"
                               placeholder="List name"
                               aria-label="List name"
                               aria-describedby="button-aad-list"
                               value={headingInput}
                               onChange={(e) => setHeadingInput(e.target.value)}/>
                        <button className="btn btn-warning"
                                type="button"
                                id="button-aad-list"
                                onClick={handleAddTodo}>Add List
                        </button>
                    </div>
                    <Loading active={loading} className="mt-5"/>
                    <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
                        {todos && todos.map((todo, listIndex) => (
                            <div key={listIndex} className="card bg-success" style={{ width: '32%' }}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="card-title text-white">{todo.heading}</h5>
                                        <button className="btn btn-sm btn-danger" type="button" onClick={() => handleDeleteTodo(listIndex)}>Delete</button>
                                    </div>
                                    <ul className="list-group list-group-flush rounded my-3">
                                        {listInputs && todo.listInputs.map((item, itemIndex) => (
                                            <li key={itemIndex} className="list-group-item list-group-item-action list-group-item-success">{item}</li>
                                        ))}
                                    </ul>
                                    <div className="input-group">
                                        <input type="text"
                                               className="form-control form-control-sm"
                                               placeholder="Item name"
                                               aria-label="Item name"
                                               aria-describedby="button-aad-list"
                                               value={listInputs[listIndex] || ''}
                                               onChange={(e) => handleListInputChange(listIndex, e.target.value)}/>
                                        <button className="btn btn-sm btn-success"
                                                type="button"
                                                id="button-aad-list"
                                                onClick={() => handleAddList(listIndex)}>Add List
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default Index;
