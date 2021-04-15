import { MdSwapHoriz } from "react-icons/md";

import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    height: 100vh;
  }
  height: 63vh;

  .skeleton {
    display: flex;
    justify-content: space-around;
  }
`;

export const VaccinesContainer = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow-y: auto;
    flex-wrap: nowrap;
  }
  max-height: 85%;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export const Header = styled.div`
  margin: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  span {
    font-size: 1.2rem;
    font-weight: 700;

    :hover {
      cursor: pointer;
    }
  }
`;

export const StyledSpan = styled.span`
  color: ${(props) => (!props.active ? "black" : Theme.colors.main_user)};
  font-size: 1.2rem;
  font-weight: 700;

  :hover {
    cursor: pointer;
  }
`;

export const Separator = styled(MdSwapHoriz)`
  font-size: 1.5rem;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  margin-right: 4.3rem;
  @media (max-width: 800px) {
    margin-right: 0;
  }
  width: 300px;
  height: 40px;
  background-color: ${Theme.colors.background_second};
  box-shadow: 0px 4px 4px ${Theme.colors.boxShadow_primary};
  input {
    width: 90%;
    height: 90%;
    border: none;
    background-color: ${Theme.colors.background_second};

    :focus {
      outline: none;
    }
  }
  svg {
    font-size: 1.8rem;
  }
`;

export const NoVaccines = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  height: 60%;
  h2,
  img {
    margin: 0;
  }
  h2 {
    margin-right: 0.2rem;
  }
`;
