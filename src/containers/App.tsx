import { connect } from 'react-redux'
import { App } from '../components/App'
import { addTodo, removeTodo, markTodoComplete } from '../actions/todos'


const mapStateToProps = (state: any) => ({
  todos: state.todos.todos,
})

export default connect(
  mapStateToProps,
  { addTodo, removeTodo, markTodoComplete }
)(App)

