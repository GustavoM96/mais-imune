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

// Revisar função dateFormat
export const dateFormat = (date) => {
  return date.toLocaleDateString("pt-br", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
