// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { render } from '@testing-library/react'
import Features from '../components/Features'

describe('Testing Hero component', () => {
  it('Should render correctly', () => {
    const { container } = render(<Features />)
    expect(container).toMatchSnapshot()
  })
})
