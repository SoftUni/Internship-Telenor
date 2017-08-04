import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class TodoStore extends EventEmitter {
  constructor () {
    super()

    this.todos = [
      { id: 1, title: 'Swimming', doing: false },
      { id: 2, title: 'Tanning', doing: false }
    ]

    this.handleAction = this.handleAction.bind(this)
  }

  getAll () {
    return new Promise((resolve, reject) => {
      resolve(this.todos.slice(0))
    })
  }

  createTodo (title) {
    const id = this.todos.length + 1

    this.todos.push({ id, title, doing: false })

    this.emit('todoList-change')
  }

  startTodo (id) {
    const todo = this.todos.find(t => t.id === id)
    todo.doing = true

    this.emit('todoList-change')
  }

  stopTodo (id) {
    const todo = this.todos.find(t => t.id === id)
    todo.doing = false

    this.emit('todoList-change')
  }

  handleAction (action) {
    switch (action.type) {
      case 'CREATE_TODO': {
        this.createTodo(action.title)
        break
      }
      case 'START_TODO': {
        this.startTodo(action.id)
        break
      }
      case 'STOP_TODO': {
        this.stopTodo(action.id)
        break
      }
      default: break
    }
  }
}

let todoStore = new TodoStore()

dispatcher.register(todoStore.handleAction)

export default todoStore