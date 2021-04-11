import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: url("/wallpaper.png");
  background-size: cover;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 50%;
    width: 60%;
    margin: 3rem;
  }
`;
