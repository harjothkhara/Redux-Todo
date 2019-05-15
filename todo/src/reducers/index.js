import { ADD_TODO } from '../actions';

const initialState = {
    task: '',
    todos: []
}


export const reducer = (state = initialState, action) => {
    if (action.type === ADD_TODO) {
        const newTodo = {
            task: action.payload,
            id: Date.now(),
            completed: false
        }
        return {
            todos: [...state.todos, newTodo]
        }
    }
        else {
            return state
        }
}