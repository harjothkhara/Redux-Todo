import { ADD_TODO, TOGGLE_TODO, CLEAR_TODOS } from '../actions';

const initialState = {
    todos: [{
        task: 'Wash Dishes',
        id: 35457676,
        completed: false
      },
      {
        task: "Yard work",
        id: 35457677,
        completed: false
      },
      {
        task: "grocery shopping",
        id: 35457678,
        completed: false
      }] 
    
}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
        const newTodo = {
            task: action.payload,
            id: Date.now(),
            completed: false
        }
        return {
            ...state,
            todos: [...state.todos, newTodo]
        }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } return todo
                } )
            }
        
        case CLEAR_TODOS:
            return {
                ...state,
                todos: state.todos.filter(item => !item.completed )
            }

        default:
            return state;
    }
        
}