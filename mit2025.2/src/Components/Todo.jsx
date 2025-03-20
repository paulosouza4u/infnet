import React, { useState } from 'react'
import "./Todo.css"

const Todo = () => {

    const [todos, setTodos] = useState([]); //LISTAS

    const [headingInput, setHeadingInput] = useState(''); // TITULO
    const [listInputs, setListInputs] = useState({}); //ITENS DAS LISTAS

    //Adição da lista
    const handleAddTodo = () => {
        if(headingInput.trim() !== ''){
            setTodos([
                ...todos,
                {heading: headingInput, listInputs: []}
            ]);
            setHeadingInput('');
        }
    };

    //Adiciona o nome do item a lista a que pertence
    const handleListInputChange = (index, value) => {
        setListInputs({...listInputs, [index]: value})
    }

    //Adiciona o item a lista de itens do state todos
    const handleAddList = (index) => {
        if (listInputs[index] && listInputs[index].trim() !== ''){
            const newTodos = [...todos];
            newTodos[index].listInputs.push(listInputs[index]);
            setTodos(newTodos);
            setListInputs({ ...listInputs, [index]: ''});
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <>
            <div className="todo-container">
                <h1 className="title">My List</h1>
                <div className='input-container'>
                    <input
                        type="text"
                        className='heading-input'
                        placeholder='Enter heading'
                        value={headingInput}
                        onChange={(e) => {setHeadingInput(e.target.value);}} //Setando os dados do título no state headingInput
                    />
                    <button
                        className="add-list-button"
                        onClick={handleAddTodo}>
                        Add List
                    </button>
                </div>
                <div className='todo_main'>
                    {todos.map((todo, index) => (
                            <div key={index} className="todo-card">
                                <div className="heading_todo">
                                    <h3>{todo.heading}</h3> {/* Título da minha lista*/}
                                    <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>
                                        [x] List
                                    </button>
                                </div>

                                <ul>
                                    {
                                        todo.listInputs.map((item, itemIndex) => (
                                            <li key={itemIndex} className='todo_inside_list'>
                                                <p>{item}</p>
                                            </li>
                                        ))}
                                </ul>

                                <div className="add_list">
                                    <input
                                        type="text"
                                        className="list-input"
                                        placeholder="Item"
                                        value={listInputs[index] || ''}
                                        onChange={(e) => handleListInputChange(index, e.target.value)}
                                    />
                                    <button className="add-list-button" onClick={() => handleAddList(index)}>Add Item</button>
                                </div>

                            </div>
                        )

                    )}
                </div>
            </div>
        </>
    )
}



export default Todo;