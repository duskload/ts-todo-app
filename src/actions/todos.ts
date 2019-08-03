import { Types, AddTodoAction, RemoveTodoAction, MarkTodoComplete } from '../constants/types'

let nextTodoId = 0

export const addTodo = (text: string): AddTodoAction => {
  return {
    type: Types.ADD_TODO,
    payload: { todo: {
      id: nextTodoId++,
      text,
      completed: false
    }
  }
  }
}

export const removeTodo = (id: number): RemoveTodoAction => {
  return {
    type: Types.REMOVE_TODO,
    id
  }
}

export const markTodoComplete = (id: number): MarkTodoComplete => {
  return {
    type: Types.MARK_COMPLETE,
    id
  }
}
