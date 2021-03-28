// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { render } from '@testing-library/react'
import Sidebar from '../components/Sidebar'

describe('Testing SideBar Component', () => {
  it('Should render sidebar component', () => {
    const { container } = render(<Sidebar />)
    expect(container).toMatchSnapshot()
  })
})
