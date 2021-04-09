import { ButtonStyled } from "./style";

const Button = ({ text, handleClick, type = "button" }) => {
  return (
    <ButtonStyled type={type} onClick={handleClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
