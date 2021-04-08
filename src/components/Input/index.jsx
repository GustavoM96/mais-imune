import { Container, InputStyled, Header, Text, ErrorMessage } from './style'

import { useState } from 'react'

const Input = ({ text, name, reference, error, type = "text" }) => {
    const [input, setInput] = useState('')

    const handleInput = (evt) => {
        const inputValue = evt.target.value
        setInput(inputValue)
    }

    return (
        <Container>
            <Header>  
                <Text>{text}</Text>
                <ErrorMessage>{error}</ErrorMessage>
            </Header>
            <InputStyled 
                type={type} 
                name={name} 
                onChange={handleInput} 
                value={input}
                ref={reference}
                error={error}
            />
        </Container>
    )
}

export default Input