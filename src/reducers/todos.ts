import { ADD_TODO, IAddTodo, ITodoState } from '../constants/types'

const initialState: ITodoState = {
  todos: []
}

export default (state = initialState, action: IAddTodo): ITodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    default:
      return state
  }
}
