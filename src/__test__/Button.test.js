import { render, screen } from '@testing-library/react'

import Button from '../components/Button'

describe('When everythin is ok', () => {
    test('Should render the prop text', () => {
        render(<Button text='test' />)
        const fromScreen = screen.getByText('test')
        expect(fromScreen).toBeInTheDocument()
    })
})
