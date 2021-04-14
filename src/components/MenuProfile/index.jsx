import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenuThunk } from "../../store/modules/MenuOpen/thunks";
import TransitionModal from "../../components/Modal";
import profile from "../../assets/profile-picture.jpeg";
import FormEditProfile from "../FormEditProfile";
import Instructions from "../Instructions";

import { ArrowLeft, ArrowRight, Container, EditIcon } from "./styles";
import CardAsideList from "../CardAsideList";
import { useState } from "react";
import { getUser } from "../../services/getUser";
import Skeleton from "@material-ui/lab/Skeleton";

function MenuProfile({ user = { name: "usuario" } }) {
  const open = useSelector((state) => state.open);
  const user_id = localStorage.getItem("user_id") || "";

  const { permission } = useSelector((state) => state.user);
  const { name } = useSelector((state) => state.user);

  const [openModal, setOpenModal] = useState(false);

  const level = JSON.parse(localStorage.getItem("permission")) || 1;
  // const userName = JSON.parse(localStorage.getItem("name")) || 1;

  const handleClose = () => {
    setOpenModal(!openModal);
  };
  const handleSetClose = () => {
    setOpenModal(false);
  };

  const dispatch = useDispatch((state) => state.open);

  return (
    <Container open={open}>
      <div>
        {open ? (
          <ArrowLeft
            open={open}
            onClick={() => dispatch(openMenuThunk(open))}
          />
        ) : (
          <ArrowRight
            open={open}
            onClick={() => dispatch(openMenuThunk(open))}
          />
        )}
      </div>
      <TransitionModal open={openModal} handleClose={handleClose}>
        <FormEditProfile handleSetClose={handleSetClose} />
      </TransitionModal>
      <div open={open} className="header">
        <div>
          <h3>Meu Perfil</h3>
          <figure>
            <img src={profile} alt="Profile" />
          </figure>
          <div>
            <span>{name}</span>
            <EditIcon onClick={handleClose} />
          </div>
        </div>
      </div>
      <div className="cards">
        {level === 1 ? (
          <>
            <CardAsideList user={user} />
          </>
        ) : (
          <>
            <Instructions permission={permission} />
          </>
        )}
      </div>
    </Container>
  );
}

export default MenuProfile;
