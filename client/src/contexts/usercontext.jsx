import React, { useContext, useState } from "react";

let initial_state = {
  userId: null,
  setUserId: null,
};
const UserContext = React.createContext(initial_state);

const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(window.localStorage.getItem("userId"));

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { userId } = useContext(UserContext);
  return userId;
};

export const useSetUser = () => {
  const { setUserId } = useContext(UserContext);
  return setUserId;
};

export default UserContextProvider;
