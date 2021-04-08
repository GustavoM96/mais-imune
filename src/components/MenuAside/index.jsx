import React, { useState } from "react";

import {
  Container,
  ArrowLeft,
  ArrowRight,
  CollapseIconContainer,
  IconContainer,
} from "./styles";

function MenuAside() {
  const props = { open: true, level: 1 };

  const { level } = props;
  // recebo da store
  const [open, setOpen] = useState(true);
  return (
    <Container open={open} level={level}>
      {open ? (
        <>
          <CollapseIconContainer onClick={() => setOpen(!open)}>
            <ArrowLeft />
          </CollapseIconContainer>
          <div>
            <IconContainer>
              <span>Dashboard</span>
            </IconContainer>
            <IconContainer>
              <ArrowLeft /> <span>Dashboard</span>
            </IconContainer>
          </div>
          <div>
            <IconContainer onClick={() => setOpen(!open)}>
              <ArrowLeft />
            </IconContainer>
          </div>
        </>
      ) : (
        <>
          <IconContainer onClick={() => setOpen(!open)}>
            <ArrowRight />
          </IconContainer>
        </>
      )}
    </Container>
  );
}

export default MenuAside;
