import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addToDo} >
            <input
                type="text"
                onChange={props.handleChanges}
                name="task"
                placeholder="...Todo"
                required
                />
                <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm;