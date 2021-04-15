import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  padding: 1rem;
  margin: 1rem auto;
  width: 94%;

  background: ${Theme.colors.background_second};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 40%;
  overflow-y: auto;

  h3 {
    text-align: center;
    margin: 3% 0%;
  }

  table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid black;
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

    h3 {
      min-width: 600px;
    }

    th,
    td {
      min-width: 150px;
    }
  }
`;

export const TableHead = styled.th`
  background-color: ${(props) =>
    props.permission === 3
      ? Theme.colors.main_admin
      : Theme.colors.main_healthEmployee};
`;
