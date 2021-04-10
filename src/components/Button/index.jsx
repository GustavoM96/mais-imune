import { ButtonStyled } from "./style";

const Button = ({ text, handleClick, type }) => {
  return (
    <ButtonStyled onClick={!type && handleClick} type={type}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
