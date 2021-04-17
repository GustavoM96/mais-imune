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
import api from "../../services/api";

import { nameFormat } from "../../utils/index";

function MenuProfile() {
  const [user, setUser] = useState();
  const open = useSelector((state) => state.open);
  const user_id = localStorage.getItem("user_id") || "";
  const token = localStorage.getItem("token") || "";

  const { permission } = useSelector((state) => state.user);
  const { name } = useSelector((state) => state.user);

  const [openModal, setOpenModal] = useState(false);

  const level = JSON.parse(localStorage.getItem("permission")) || 1;
  // const name = JSON.parse(localStorage.getItem("name")) || 1;

  const handleClose = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    api
      .get(`/users/${user_id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        console.log(
          "🚀 ~ file: index.jsx ~ line 45 ~ .then ~ response",
          response.data
        );
        setUser(response.data);
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <FormEditProfile handleClose={handleClose} />
      </TransitionModal>
      <div open={open} className="header">
        <div>
          <h3>Meu Perfil</h3>
          <figure>
            <img src={profile} alt="Profile" />
          </figure>
          <div>
            <span>{nameFormat(name)}</span>
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
