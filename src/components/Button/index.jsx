import { ButtonStyled } from "./style";

const Button = ({ text, handleClick, type, marginTop = '0', marginBottom = '0' }) => {
  return (
    <ButtonStyled onClick={!type && handleClick} type={type} marginTop={marginTop} marginBottom={marginBottom}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
