import React from 'react'
import { connect } from 'react-redux'

import TodoList from '../../components/TodoList'
import { ITodo, IAddTodo } from '../../constants/types'

import { addTodo } from '../../actions/todos'

import './App.scss'

interface IAppProps {
  todos: Array<ITodo>
  addTodo(payload: ITodo): IAddTodo
}

const App: React.FC<IAppProps> = props => {
  return (
    <div className="app">
      <h1>ToDo App</h1>
      <TodoList todos={props.todos} addTodo={props.addTodo} />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  todos: state.todos.todos,
})

export default connect(
  mapStateToProps,
  { addTodo }
)(App)
