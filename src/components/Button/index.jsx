import { ButtonStyled } from './style'

const Button = ({ text, handleClick }) => {
    return (
        <ButtonStyled onClick={handleClick}>{text}</ButtonStyled>
    )
}

export default Button