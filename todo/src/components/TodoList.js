import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return props.list.map(item => (
        <Todo task={item.task} key={item.id} />
    ))
}

export default TodoList;