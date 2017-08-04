import React, { Component } from 'react'
import Todo from './Todo'
import TodoStore from '../stores/TodoStore'
import TodoActions from '../actions/TodoActions'

export default class TodoList extends Component {
  constructor () {
    // there is no need to have 'props' in the constructor
    // because they are not passed anywhere
    super()

    this.state = {
      title: '',
      todos: []
    }

    TodoStore.on('todoList-change', () => {
      this.getAllTodos()
    })

    this.handleChange = this.handleChange.bind(this)
    this.createTodo = this.createTodo.bind(this)
  }

  componentDidMount () {
    this.getAllTodos()
  }

  getAllTodos () {
    TodoStore
      .getAll()
      .then(todos => this.setState({todos}))
  }

  createTodo (event) {
    event.preventDefault()

    TodoActions.createTodo(this.state.title)

    this.setState({title: ''})
  }

  handleChange (event) {
    this.setState({title: event.target.value})
  }

  render () {
    const { todos } = this.state

    const todoElements = todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))

    return (
      <div>
        <h1>My summer Todo List</h1>
        <ul>{todoElements}</ul>
        <div>
          <input type="text"
                 ref='title'
                 value={this.state.title}
                 onChange={this.handleChange} />
          <button onClick={this.createTodo}>Add new task</button>
        </div>
      </div>
    )
  }
}