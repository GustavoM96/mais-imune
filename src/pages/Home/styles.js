import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  div.message {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 50%;
    width: 60%;
    margin: 3rem;
  }
  .nurse-doc img {
    width: 50vw;
    min-width: 700px;
    max-width: 1000px;
    position: absolute;
    bottom: 0;
    margin: 0;
    right: 0;
    z-index: -1;
  }
  .esquerda img {
    width: 500px;
    position: absolute;
    bottom: 0;
    margin: 0;
    left: 0;
    z-index: -2;
  }
  .direita img {
    width: 500px;
    z-index: 1;
    position: absolute;
    top: 0;
    margin: 0;
    right: 0;
    z-index: -2;
  }
`;
