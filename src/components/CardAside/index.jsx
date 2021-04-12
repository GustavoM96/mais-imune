import { Container } from "./styles";
import Button from "../Button";
import TransitionModal from "../../components/Modal";
import { useState } from "react";
import FormRegister from "../FormRegister";

import ListAltIcon from "../../assets/list_alt.svg";

const CardAside = ({ vaccine, hasLocal = true }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <div>
        <h6>{vaccine}</h6>
      </div>

      <TransitionModal open={open} handleClose={handleClose}>
        <FormRegister />
      </TransitionModal>
      {hasLocal && (
        <figure>
          <img onClick={handleClose} src={ListAltIcon} alt="list" />
        </figure>
      )}
    </Container>
  );
};

export default CardAside;
