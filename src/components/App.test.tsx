import React from 'react'
import { App, IAppProps } from './App'
import { shallow } from 'enzyme'

describe('App', () => {
  let props: IAppProps
  let wrapper: any
  beforeAll(() => {
    props = {
      todos: [],
      addTodo: jest.fn(),
      removeTodo: jest.fn(),
      markTodoComplete: jest.fn(),
    }
    wrapper = shallow(<App {...props} />)
  })

  it('App renders without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })
})
