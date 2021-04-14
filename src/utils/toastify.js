import { toast } from "react-toastify";

const options = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const toastRegisterSuccess = () => {
  return toast.dark(" ✔️  Cadastro realizado com sucesso", options);
};

export const toastRegisterError = () => {
  return toast.error(
    " ✖️ Falha ao realizar cadastro. Verifique os dados e tente novamente",
    options
  );
};

export const toastLoginSuccess = () => {
  return toast.dark(" ✔️  Sejam bem-vindo", options);
};

export const toastLoginError = () => {
  toast.error(
    " ✖️ Falha ao efetuar o login. Verifique e-mail e senha e tente novamente",
    options
  );
};

export const toastEditSuccess = () => {
  return toast.dark(" ✔️ Alteração feita com sucesso", options);
};

export const toastEditError = () => {
  toast.error(
    " ✖️ Falha ao efetuar a alteração. Favor tente novamente",
    options
  );
};
