import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const list = [
  {
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
  }
];

class App extends Component {
    state = {
      list: list
    }
  
  render() {
    return (
    <div className="container">
      <h1>ToDo List</h1>
      <TodoList list={this.state.list} />
      <TodoForm />
      <button>Clear Completed</button>
    
    </div>
   );
  }
}

export default App;
