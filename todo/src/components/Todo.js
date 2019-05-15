import React from 'react';

const Todo = props => {
    return (
        <div onClick={() => props.toggleTodo(props.todo.id)} 
        className={props.todo.completed ? `cleared` : ``} >
            <li>{props.todo.task}</li>
        </div>
    )

}

export default Todo;