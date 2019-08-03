

export enum Types {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  MARK_COMPLETE = 'MARK_COMPLETE'
}

export interface ITodo {
  id: number,
  text: string,
  completed: boolean
}

export interface AddTodoAction {
  type: Types.ADD_TODO,
  payload: {
    todo: ITodo
  }
}

export interface RemoveTodoAction {
  type: Types.REMOVE_TODO,
  id: number
}

export interface MarkTodoComplete {
  type: Types.MARK_COMPLETE,
  id: number
}

export interface IState {
  todos: ITodo[]
}

export type TodoActions = AddTodoAction | RemoveTodoAction | MarkTodoComplete
