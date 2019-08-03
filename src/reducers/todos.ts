import { Types, TodoActions, IState } from '../constants/types'
import * as R from 'rambda'

const initialState: IState = {
  todos: []
}

export function reducer (state: IState = initialState, action: TodoActions) {
  switch (action.type) {
    case Types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo]
      }
    case Types.REMOVE_TODO:
      const isNotEven = (x: any) => x.id !== action.id
      return {
        ...state,
        todos: R.filter(isNotEven, state.todos)
      }
    case Types.MARK_COMPLETE:
      const todos = state.todos.map(item => {
        if (item.id === action.id) {
          item.completed = true
        }
        return item
      })
      return { ...state, todos }
    default:
      return state
  }
}
