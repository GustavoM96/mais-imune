import { Container } from "./styles";

import Button from "../Button";
import FormCreateVaccine from "../FormCreateVaccine";
import FormRegisterEmployee from "../FormRegisterEmployee";
import FormVaccineBond from "../FormVaccineBond";
import TransitionModal from "../../components/Modal";
import FormRegisterLocal from "../../components/FormRegisterLocal";

import { useState } from "react";

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
        {form === "formRegisterEmployee" ? (
          <FormRegisterEmployee handleClose={handleClose} />
        ) : form === "formCreateVaccine" ? (
          <FormCreateVaccine handleClose={handleClose} />
        ) : form === "formVaccineBond" ? (
          <FormVaccineBond handleClose={handleClose} />
        ) : (
          <FormRegisterLocal handleClose={handleClose} />
        )}
      </TransitionModal>
    </Container>
  );
};

export default CardDashboard;
