import useGetUsers from "./useGetUsers";

const useValidateUser = () => {
  const { users } = useGetUsers();

  const validateUser = (data) => {
    let userFound = false;
    users.map((user) => {
      if (user.email == data.email && user.password == data.password) {
        userFound = user;
      }
    });
    return userFound;
  };

  return { validateUser };
};

export default useValidateUser;
