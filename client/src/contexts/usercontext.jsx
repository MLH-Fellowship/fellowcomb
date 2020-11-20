import React, { useContext, useState } from "react";

let initial_state = {
  userId: null,
  setUserId: null,
  username: null,
};
const UserContext = React.createContext(initial_state);

const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(window.localStorage.getItem("userId"));
  let username;
  if (userId) {
    // TODO: load username from userId
    username = "jcs98";
  }

  return (
    <UserContext.Provider value={{ userId, setUserId, username }}>
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

export const useUsername = () => {
  const { username } = useContext(UserContext);
  return username;
};

export default UserContextProvider;
