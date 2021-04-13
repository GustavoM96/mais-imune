export const signIn = (token, user) => ({
  type: "@user/SIGN_IN",
  token,
  user,
});
