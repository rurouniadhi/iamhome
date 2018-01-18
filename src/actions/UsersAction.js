export const userAccount = (userAccountEmail) => {
  return {
    type: 'user_account',
    payload: userAccountEmail
  };
};
