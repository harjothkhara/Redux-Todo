import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                type="text"
                name="task"
                placeholder="...Todo"
                required
                />
                <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm;