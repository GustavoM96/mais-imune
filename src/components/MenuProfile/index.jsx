import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenuThunk } from "../../store/modules/MenuOpen/thunks";
import TransitionModal from "../../components/Modal";
import profile from "../../assets/profile-picture.jpeg";
import FormEditProfile from "../FormEditProfile";

import {
  ArrowLeft,
  ArrowRight,
  Container,
  EditIcon,
  Separator,
} from "./styles";
import CardAside from "../CardAside";
import CardAsideList from "../CardAsideList";
import { useState } from "react";

function MenuProfile({ user = { name: "usuario" } }) {
  const open = useSelector((state) => state.open);
  const [openModal, setOpenModal] = useState(false);

  const level = [1, 2, 3];

  const handleClose = () => {
    setOpenModal(!openModal);
  };

  const dispatch = useDispatch((state) => state.open);

  return (
    <Container open={open}>
      <TransitionModal open={openModal} handleClose={handleClose}>
        <FormEditProfile userID={user.id} />
      </TransitionModal>
      <div>
        {open ? (
          <ArrowLeft onClick={() => dispatch(openMenuThunk(open))} />
        ) : (
          <ArrowRight onClick={() => dispatch(openMenuThunk(open))} />
        )}
      </div>
      <div open={open} className="header">
        <div>
          <h3>Meu Perfil</h3>
          <figure>
            <img src={profile} alt="Profile" />
          </figure>
          <div>
            <span>{user.name[0].toUpperCase() + user.name.slice(1)}</span>
            <EditIcon onClick={handleClose} />
          </div>
        </div>
      </div>
      <div className="cards">
        {level[0] === 1 ? (
          <div>
            <CardAsideList user={user} />
          </div>
        ) : (
          <div>
            <span>Instruções</span>
          </div>
        )}
      </div>
    </Container>
  );
}

export default MenuProfile;
