import dispatcher from '../dispatcher'

let todoActions = {
  createTodo: (title) => {
    dispatcher.dispatch({
      type: 'CREATE_TODO',
      title
    })
  },
  startTodo: (id) => {
    dispatcher.dispatch({
      type: 'START_TODO',
      id
    })
  },
  stopTodo: (id) => {
    dispatcher.dispatch({
      type: 'STOP_TODO',
      id
    })
  }
}

export default todoActions