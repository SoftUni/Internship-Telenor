import React, { Component } from 'react'
import TodoActions from '../actions/TodoActions'

export default class Todo extends Component {
  startTodo (event) {
    event.preventDefault()

    TodoActions.startTodo(this.props.id)
  }

  stopTodo (event) {
    event.preventDefault()

    TodoActions.stopTodo(this.props.id)
  }

  render () {
    return (
      <li>
        {this.props.title} - {this.props.doing ? (
        <button onClick={this.stopTodo.bind(this)}>STOP DOING IT!</button>
      ) : (
          <button onClick={this.startTodo.bind(this)}>JUST DO IT!</button>
      )}
      </li>
    )
  }
}