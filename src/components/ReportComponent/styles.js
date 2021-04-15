import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  padding: 1rem;
  margin: 1rem auto;
  width: 94%;

  background: ${Theme.colors.background_second};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: auto;
  height: 40%;

  table,
  tr {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }

  table thead tr th,
  td {
    border: 1px solid black;
  }

  table thead tr th {
    background-color: ${Theme.colors.main_admin};
  }

  .skeletonGrid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-height: 800px) {
    height: 47%;
  }

  @media (min-height: 900px) {
    height: 55%;
  }

  @media (max-width: 800px) {
    width: 80%;
    overflow-x: auto;

    table thead tr th,
    td {
      min-width: 150px;
    }
  }
`;
