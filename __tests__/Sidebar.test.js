import * as React from 'react'
import { render } from '@testing-library/react'
import Sidebar from '../components/Sidebar'

describe('Testing SideBar Component', () => {
  it('Should render sidebar component', () => {
    render(<Sidebar />)
  })
})