import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, clearCompleted  } from './actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      this.props.addTodo(this.state.task);
      this.setState({ task: '' })
    }

    toggleTodo = id => {
      this.props.toggleTodo(id);
      console.log(this.props);
    }

    clearCompleted = () => {
      this.props.clearCompleted();
    }
  
  render() {
    return (
    <div className="container">
      <h1>ToDo List</h1>
      <TodoList todos={this.props.todos} toggleTodo={this.toggleTodo} />
      <TodoForm handleChanges={this.handleChanges} addTodo={this.addTodo} task={this.state.task} />
      <button onClick={this.clearCompleted} >Clear Completed</button>
    
    </div>
   );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, {addTodo, toggleTodo, clearCompleted })(App);
