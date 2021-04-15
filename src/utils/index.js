import { format } from "date-fns";

export const cpfFormat = (cpf) => {
  cpf = cpf.replace(/[^\d]/g, "");

  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

export const nameFormat = (name) => {
  let newName = [];

  name
    .split(" ")
    .map((elem) => newName.push(elem.charAt(0).toUpperCase() + elem.slice(1)));

  return newName.join(" ");
};

export const dateFormat = (date) => {
  date = date.split("-");

  const newDate = format(new Date(date[0], date[1], date[2]), "dd/MM/yyyy");

  return newDate;
};
