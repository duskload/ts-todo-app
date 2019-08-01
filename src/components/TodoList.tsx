import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { ITodo } from '../containers/App/App'

import './TodoList.scss'

interface ITodoListState {
  text: string
}

interface ITodoListProps {
  addItem(text: string): void
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

    this.props.addItem(this.state.text)
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
          <Button className="todo-list-add-new__button" color="primary">
            Add todo
          </Button>
        </form>
        <div className="todo-list">
          {this.props.todos.map((item, index) => {
            return (
              <div key={index} className="todo-list__item">
                {item.text}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
