// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { render } from '@testing-library/react'
import Hero from '../components/Hero'

describe('Testing Hero component', () => {
  it('Should render correctly', () => {
    const { container } = render(<Hero />)
    expect(container).toMatchSnapshot()
  })
})
