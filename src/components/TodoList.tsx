import React from 'react'
import { TextField } from '@material-ui/core'

import { ITodo, AddTodoAction, RemoveTodoAction, MarkTodoComplete } from '../constants/types'
import { TodoItem } from './TodoItem'

import './TodoList.scss'

interface ITodoListState {
  text: string
}

export interface ITodoListProps {
  addTodo(text: string): AddTodoAction
  removeTodo(id: number): RemoveTodoAction
  markTodoComplete(id: number): MarkTodoComplete
  todos: ITodo[]
}

export class TodoList extends React.Component<ITodoListProps, ITodoListState> {
  state: ITodoListState = {
    text: '',
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: event.target.value })
  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div className="todo-list-wrapper">
        <form className="todo-list-add-new" autoComplete="off" onSubmit={this.onSubmit}>
          <TextField
            className="todo-list-add-new__text-field"
            placeholder="What needs to be done?"
            value={this.state.text}
            onChange={this.onChange}
          />
        </form>
        <div className="todo-list">
          {this.props.todos.map(item => (
            <TodoItem
              key={item.id}
              removeTodo={this.props.removeTodo}
              markTodoComplete={this.props.markTodoComplete}
              completed={item.completed}
              item={item}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default TodoList
