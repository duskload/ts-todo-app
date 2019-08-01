import React from 'react'
import TodoList from '../../components/TodoList'

import './App.scss'

export interface ITodo {
  text: string
}

interface IAppState {
  todos: Array<ITodo>
}

class App extends React.Component<{}, IAppState> {
  state: IAppState = {
    todos: []
  }

  addItem = (text: string) => {
    const item = { text }

    const todos = [...this.state.todos]

    todos.push(item)

    this.setState({ todos })
  }

  render() {
    return (
      <div className="app">
        <h1>ToDo App</h1>
        <TodoList todos={this.state.todos} addItem={this.addItem} />
      </div>
    )
  }
}

export default App
