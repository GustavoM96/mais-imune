import { MdSwapHoriz } from "react-icons/md";

import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  padding: 5px;
`;

export const VaccinesContainer = styled.div`
  display: flex;
  max-height: 53vh;
  flex-wrap: wrap;
  overflow-y: auto;
  align-items: center;
`;

export const Header = styled.div`
  margin: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.2rem;
    font-weight: 700;

    :hover {
      cursor: pointer;
    }
  }
  div {
    width: 100%;
  }
  .menu-profile {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

export const StyledSpan = styled.span`
  display: block;
  color: ${(props) => (props.active ? "black" : Theme.colors.main_user)};
  font-size: 1.2rem;
  font-weight: 700;

  :hover {
    cursor: pointer;
  }
`;

export const Separator = styled(MdSwapHoriz)`
  font-size: 1rem;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  margin-right: 4.3rem;
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
