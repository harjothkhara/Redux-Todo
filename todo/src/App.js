import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
import { addTodo } from './actions';

const todos = [
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
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      task: ''
    }

  }
    
    handleChanges = e => {
      console.log(this.state)
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    addTodo = e => {
      e.preventDefault();
      this.props.addTodo(this.state.task)
    }
  
  render() {
    return (
    <div className="container">
      <h1>ToDo List</h1>
      <TodoList todos={this.props.todos} />
      <TodoForm handleChanges={this.handleChanges} addTodo={this.addTodo} task={this.state.task} />
      <button>Clear Completed</button>
    
    </div>
   );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    task: state.task
  }
}

export default connect(mapStateToProps, {addTodo})(App);
