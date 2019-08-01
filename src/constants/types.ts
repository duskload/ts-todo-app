

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const EDIT_TODO = 'EDIT_TODO'

export interface ITodo {
  id: number,
  text: string,
  completed: boolean
}

export interface IAddTodo {
  type: string,
  payload: ITodo
}

export interface ITodoState {
  todos: ITodo[]
}
