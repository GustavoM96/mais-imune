import React from "react";

import { Container, ArrowLeft, ArrowRight } from "./styles";

function MenuAside() {
  //BiArrowFromLeft
  //BiArrowFromRight

  const props = { open: false, level: 1 };

  const { open, level } = props;
  return (
    <Container open={open} level={level}>
      {open ? (
        <>
          <div>
            <ArrowLeft />
          </div>
        </>
      ) : (
        <>
          <div>
            <ArrowRight />
          </div>
        </>
      )}
    </Container>
  );
}

export default MenuAside;
