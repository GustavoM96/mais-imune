import { FaGripLinesVertical } from "react-icons/fa";
import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div``;

export const VaccinesContainer = styled.div`
  display: flex;
  max-height: 60vh;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export const Header = styled.div`
  margin-top: 1rem;

  margin-left: 2rem;

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
`;

export const Separator = styled(FaGripLinesVertical)`
  font-size: 0.8rem;
`;

export const SearchBar = styled.div`
  padding: 0 0.5rem;
  margin-right: 4.3rem;
  width: 300px;
  height: 20px;
  background-color: ${Theme.colors.background_second};
  box-shadow: 0px 4px 4px ${Theme.colors.boxShadow_primary};
  input {
    width: 90%;
    border: none;
    background-color: ${Theme.colors.background_second};

    :focus {
      outline: none;
    }
  }
`;
