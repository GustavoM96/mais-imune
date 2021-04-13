import React, { useEffect } from "react";
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
import { getUser } from "../../services/getUser";

function MenuProfile({ user = { name: "usuario" } }) {
  const open = useSelector((state) => state.open);
  const { permission } = useSelector((state) => state.user);

  const [openModal, setOpenModal] = useState(false);

  const level = JSON.parse(localStorage.getItem("permission")) || 1;
  const userName = JSON.parse(localStorage.getItem("name")) || 1;

  const handleClose = () => {
    setOpenModal(!openModal);
  };

  const dispatch = useDispatch((state) => state.open);

  const dispatchUser = useDispatch((state) => state.user);

  useEffect(() => {
    getUser(dispatchUser);
  }, []);

  return (
    <Container open={open}>
      <TransitionModal open={openModal} handleClose={handleClose}>
        <FormEditProfile handleClose={handleClose} />
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
          Vem do store/permission
          <br />
          {permission}
          <figure>
            <img src={profile} alt="Profile" />
          </figure>
          <div>
            <span>{userName[0].toUpperCase() + userName.slice(1)}</span>
            <EditIcon onClick={handleClose} />
          </div>
        </div>
      </div>
      <div className="cards">
        {level === 1 ? (
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
