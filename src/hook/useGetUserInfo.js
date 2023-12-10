export const useGetUserInfo = () => {
  const { userID, email, isAuth } =
    JSON.parse(localStorage.getItem("auth")) || {};

  return { userID, email, isAuth };
};
