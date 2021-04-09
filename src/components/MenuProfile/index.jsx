import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenuThunk } from "../../store/modules/MenuOpen/thunks";

import profile from "../../assets/profile.png";

import {
  ArrowLeft,
  ArrowRight,
  Container,
  EditIcon,
  Separator,
} from "./styles";

function MenuProfile() {
  const open = useSelector((state) => state.open);

  const dispatch = useDispatch((state) => state.open);

  return (
    <Container open={open}>
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
            <span>User Name</span>
            <EditIcon />
          </div>
        </div>
      </div>
      <div className="cards">
        <div>
          <span> Pŕoximas vacinas </span>
          <Separator />
          <span> Últimas Vacinas</span>
        </div>
      </div>
    </Container>
  );
}

export default MenuProfile;
