import React from 'react';
import TodoItem from "./TodoItem";
import close from "../assets/close.svg"
import Popup from "./Popup";


const TodoList = ({title, deleteList, idx}) => {

    const [todos, setTodos] = React.useState([{id: 1, title: 'My first todo', status: false}, {id: 2, title: 'My first todo 2', status: true}])
    const [todoPopup, setTodoPopup] = React.useState(false)

    const inputTodo = React.useRef()

    const removeTodo = (todo) => {
        setTodos(todos.filter(td => td.id !== todo.id))
    }

    const changeStatus = (todo) => {
        setTodos(todos.map(td => {
            if(td.id === todo.id) {
                td.status = !td.status
                return td
            } else {
                return td
            }
        }))
    }

    const closePopup = () => {
        setTodoPopup(!todoPopup)
    }

    const createNewTodo = () => {
        if(inputTodo.current.value === ''){
            throw new Error('input is empty')
        } else {
            const newTodo = {
                id: todos.length + 1,
                title: inputTodo.current.value,
                status: true
            }
            setTodos([...todos, newTodo])
            inputTodo.current.value = ''
        }
    }


    return (
        <div className="list">
            {
                todoPopup
                    ?
                    <div>
                        <Popup closePop={closePopup}/>
                        <div style={{
                            zIndex: '1000', position: 'absolute',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)', display: 'flex',
                            flexDirection: 'column', backgroundColor: 'white',
                            padding: '30px'
                        }}>
                            <h1 style={{fontSize: '24px', color: 'black', textAlign: 'center', marginBottom: '12px'}}>New Todo Creator</h1>
                            <input type="text" placeholder={'todoname'} className='popupInput' ref={inputTodo}/>
                            <button style={{backgroundColor: 'black', padding: '10px', color: 'white'}} onClick={createNewTodo}>Create</button>
                        </div>
                    </div>
                    : null
            }
            <div className="list_header">
                <span className="list_title">{title}</span>
                <img className="list_delBtn" src={close} onClick={() => deleteList(idx)}></img>
                <button onClick={() => setTodoPopup(!todoPopup)}>Create</button>
            </div>
            <div style={{marginTop: "20px"}}>
                {
                    todos.map((todo, index) => {
                        return <TodoItem todo={todo} key={index} removetd={removeTodo} change={changeStatus}/>

                    })
                }
            </div>
        </div>
    );
};

export default TodoList;
