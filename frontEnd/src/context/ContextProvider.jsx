import { useEffect, useState } from "react";

import { UserContext } from "./Context";

export const UsersData = (props) => {
  const [token, setToken] = useState("");

  const userDetails = {
    token,
    setToken,
  };

  return (
    <UserContext.Provider value={userDetails}>
      {props.children}
    </UserContext.Provider>
  );
};
