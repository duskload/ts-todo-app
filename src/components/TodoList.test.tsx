import React from 'react'
import { shallow } from 'enzyme'
import { TodoList, ITodoListProps } from './TodoList'

describe('TodoList', () => {
  let props: ITodoListProps
  let wrapper: any
  beforeAll(() => {
    props = {
      todos: [],
      addTodo: jest.fn(),
      removeTodo: jest.fn(),
      markTodoComplete: jest.fn(),
    }
    wrapper = shallow(<TodoList {...props} />)
  })

  it('TodoList renders without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  describe('TodoList methods', () => {
    let instance: any
    beforeAll(() => {
      instance = wrapper.instance()
    })

    it('addTodo()', () => {
      const text = 'TodoText'
      const e = { preventDefault: jest.fn() }

      wrapper.setState({ text })

      expect(instance.state).toEqual({ text })

      instance.onSubmit(e)

      expect(props.addTodo).toHaveBeenCalledWith(text)
    })
  })
})
