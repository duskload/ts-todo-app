

import React from 'react'

import TodoList from '../components/TodoList'
import { ITodo, AddTodoAction, RemoveTodoAction, MarkTodoComplete } from '../constants/types'

import './App.scss'

export interface IAppProps {
  todos: ITodo[]
  addTodo(text: string): AddTodoAction
  removeTodo(id: number): RemoveTodoAction
  markTodoComplete(id: number): MarkTodoComplete
}

const App: React.FC<IAppProps> = props => {
  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoList {...props} />
    </div>
  )
}

export { App }
