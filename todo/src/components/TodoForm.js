import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTodo}>
            <input
                type="text"
                onChange={props.handleChanges}
                name="task"
                value={props.task}
                placeholder="...Todo"
                required
                />
                <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm;