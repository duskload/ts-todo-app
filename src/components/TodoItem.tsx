import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { ITodo, RemoveTodoAction, MarkTodoComplete } from '../constants/types'
import { ItemMenu } from './ItemMenu'
interface ITodoItemProps {
  item: ITodo
  removeTodo(id: number): RemoveTodoAction
  markTodoComplete(id: number): MarkTodoComplete
  completed: boolean
}

const TodoItem: React.SFC<ITodoItemProps> = props => {
  const isDisabledClass = props.completed ? 'disabled' : ''
  return (
    <div className={`todo-list--item-wrapper ${isDisabledClass}`}>
      <Paper className='todo-list__item'>
        <Typography component="p" className={`${isDisabledClass}`}>{props.item.text}</Typography>
        <ItemMenu id={props.item.id} removeTodo={props.removeTodo} markTodoComplete={props.markTodoComplete} />
      </Paper>
    </div>
  )
}

export { TodoItem }
