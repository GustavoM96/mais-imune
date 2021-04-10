import { Container } from "./styles";
import Button from "../Button";
import TransitionModal from "../../components/Modal";
import { useState } from "react";

import FormRegister from "../FormRegister";

const CardDashboard = ({ icon, title, text, buttonText, form }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <img src={icon} alt="" />
      <h4>{title}</h4>
      <p> {text}</p>
      <Button handleClick={handleClose} text={buttonText} />
      <TransitionModal open={open} handleClose={handleClose}>
        {form === "formRegister" && <FormRegister />}
      </TransitionModal>
    </Container>
  );
};

export default CardDashboard;
