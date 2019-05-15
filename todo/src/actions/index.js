export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';

export const addTodo = task => {
    return {
        type: ADD_TODO,
        payload: task
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}
export const clearCompleted = () => {
    return {
        type: CLEAR_TODOS
    }
}
