import jwt_decode from "jwt-decode";

export const isLoged = () => {
  const token = localStorage.getItem("token") || "";
  if (token) {
    console.log("de true");

    return true;
  }
  console.log("de false");

  return false;
};
