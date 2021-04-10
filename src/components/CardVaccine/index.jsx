import { CardStyled, TitleStyled } from "./style";

const CardVaccine = ({ vaccine, description, date }) => {
  return (
    <CardStyled>
      <TitleStyled>Vacina: {vaccine}</TitleStyled>
      <TitleStyled>Descrição: {description}</TitleStyled>
      <TitleStyled>Data: {date}</TitleStyled>
    </CardStyled>
  );
};

export default CardVaccine;
