import styled from "styled-components";

export const Logo = styled.img`
  width: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 900px) {
    display: block;
    width: 100vw;
    height: 100vh;
    flex-direction: row;
  }

  div.message {
    padding: 1rem;
    font-size: 12px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
      text-align: center;

      span {
        font-weight: normal;
      }
    }

    p {
      font-size: 1rem;
      text-align: center;
    }

    @media (min-width: 900px) {
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      height: 50%;
      width: 60%;
      margin: 3rem;

      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1.8rem;
        text-align: center;
        margin-bottom: 4.5vh;
      }
    }
  }
  .nurse-doc img {
    width: 100%;
    @media (min-width: 900px) {
      width: 50vw;
      min-width: 700px;
      max-width: 1000px;
      position: absolute;
      bottom: 0;
      margin: 0;
      right: 0;
      z-index: -1;
    }
  }
  .esquerda img {
    width: 500px;
    position: absolute;
    bottom: 0;
    margin: 0;
    left: 0;
    z-index: -2;

    @media (max-width: 900px) {
      display: none;
    }
  }
  .direita img {
    width: 500px;
    z-index: 1;
    position: absolute;
    top: 0;
    margin: 0;
    right: 0;
    z-index: -2;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;
