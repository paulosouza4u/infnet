import React, {useState} from "react";
import {Container} from "reactstrap";

/*** CART COMPONENT ***/
const Index = () => {

    const [headingInput, setHeadingInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [listInputs, setListInputs] = useState({});

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
        }
    };

    /*** Component Render ***/
    return (
        <main>
            <Container className="heightDefault">
                <div className="mt-5 debug">
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
                    <div className="d-flex gap-3 justify-content-center flex-wrap mt-4 debug">
                        {todos && todos.map((todo, listIndex) => (
                            <div key={listIndex} className="card " style={{ width: '32%' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{todo.heading} - Category</h5>asassss
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
