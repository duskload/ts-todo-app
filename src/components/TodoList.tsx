import React from 'react'
import { TextField, Button } from '@material-ui/core'

import { ITodo, IAddTodo } from '../constants/types'
import { TodoItem } from './TodoItem'


import './TodoList.scss'

interface ITodoListState {
  text: string
}

interface ITodoListProps {
  addTodo(payload: ITodo): IAddTodo
  todos: Array<ITodo>
}

export default class TodoList extends React.Component<ITodoListProps, ITodoListState> {
  state: ITodoListState = {
    text: '',
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    this.setState({ text: event.target.value })
  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const item = {
      id: this.props.todos.length + 1,
      text: this.state.text,
      completed: false
    }

    this.props.addTodo(item)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div className="todo-list-wrapper">
        <form className="todo-list-add-new" autoComplete="off" onSubmit={this.onSubmit}>
          <TextField
            className="todo-list-add-new__text-field"
            placeholder="Add todo"
            value={this.state.text}
            onChange={this.onChange}
          />
          <Button variant="outlined" className="todo-list-add-new__button" color="primary">
            Add todo
          </Button>
        </form>
        <div className="todo-list">
          {this.props.todos.map(item => <TodoItem key={item.id} item={item} />)}
        </div>
      </div>
    )
  }
}

