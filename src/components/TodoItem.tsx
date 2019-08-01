import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { ITodo } from '../constants/types'

interface ITodoItemProps {
  item: ITodo
}

const TodoItem: React.SFC<ITodoItemProps> = props => {
  return (
    <div className="todo-list--item-wrapper">
      <Paper className="todo-list__item">
        <Typography component="p">{props.item.text}</Typography>
      </Paper>
    </div>
  )
}

export { TodoItem }
