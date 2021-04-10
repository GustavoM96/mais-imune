import { Container } from "./styles";
import Button from "../Button";

const CardDashboard = ({ icon, title, text, handleClick, buttonText }) => {
  return (
    <Container>
      <img src={icon} alt="" />
      <h4>{title}</h4>
      <p> {text}</p>
      <Button handleClick={handleClick} text={buttonText} />
    </Container>
  );
};

export default CardDashboard;
