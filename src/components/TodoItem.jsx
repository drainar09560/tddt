import React from 'react';
import Popup from "./Popup";

const TodoItem = ({todo, removetd, change, popup}) => {


    return (
        <div className="todo">
            {
                popup ? <Popup/> : null
            }
            <div className="todo_title">
                <div className="todo_title-color"></div>
                <div className="todo_title-text">{todo.title}</div>
            </div>
            {
                todo.status ?
                    <div className="todo_inprogress" onClick={() => change(todo)}>In progress</div>
                    :
                    <div className="todo_completed" onClick={() => change(todo)}>Done</div>
            }

            <button className="todo_btn" onClick={() => removetd(todo)}>Kill</button>
        </div>
    );
};

export default TodoItem;
