export const signIn = (token, user) => ({
  type: "@user/SIGN_IN",
  token,
  user,
});
export const changeInfo = (nameChange, emailChange) => ({
  type: "@user/CHANGE_INFO",
  nameChange,
  emailChange,
});
