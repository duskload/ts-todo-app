import { ADD_TODO, ITodo, IAddTodo } from '../constants/types'

export const addTodo = (payload: ITodo): IAddTodo => {
  return {
    type: ADD_TODO,
    payload
  }
}

// export const removeTodo = id => {
//   return {
//     type: REMOVE_TODO,
//     id
//   }
// }

// export const editTodo = id => {
//   return {
//     type: EDIT_TODO,
//     id
//   }
// }
