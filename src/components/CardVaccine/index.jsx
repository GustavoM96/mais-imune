import { CardStyled, TitleStyled } from "./style";

const CardVaccine = ({ vaccine, lot, data }) => {
  return (
    <CardStyled>
      <TitleStyled>Vacina: {vaccine}</TitleStyled>
      <TitleStyled>Lote: {lot}</TitleStyled>
      <TitleStyled>Data: {data}</TitleStyled>
    </CardStyled>
  );
};

export default CardVaccine;
