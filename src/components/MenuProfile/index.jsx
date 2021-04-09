import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenuThunk } from "../../store/modules/MenuOpen/thunks";

import { ArrowLeft, ArrowRight, Container } from "./styles";

function MenuProfile() {
  const open = useSelector((state) => state.open);

  const dispatch = useDispatch((state) => state.open);

  return (
    <Container open={open}>
      <div className="header">
        <div>
          {open ? (
            <ArrowLeft onClick={() => dispatch(openMenuThunk(open))} />
          ) : (
            <ArrowRight onClick={() => dispatch(openMenuThunk(open))} />
          )}
        </div>
      </div>
    </Container>
  );
}

export default MenuProfile;
