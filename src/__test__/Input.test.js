import { render, screen } from '@testing-library/react'

import Input from '../components/Input'

describe('When everythin is ok', () => {
    test('Should render the prop text', () => {
        render(<Input text='Test text' register={() => console.log('mock register')}/>)
        const fromScreen = screen.getByText('Test text')
        expect(fromScreen).toBeInTheDocument()
    })
  
    test('Should render the prop error', () => {
        render(<Input error='Test error' register={() => console.log('mock register')} />)
        const fromScreen = screen.getByText('Test error')
        expect(fromScreen).toBeInTheDocument()
    })

})




