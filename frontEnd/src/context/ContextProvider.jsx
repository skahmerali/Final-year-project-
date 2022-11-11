import { useEffect, useState } from "react";

import { UserContext } from "./Context";

export const UsersData = (props) => {
  const [token, setToken] = useState("");
  const [loginData, setLoginData] = useState(null);
  const [signData, setSignData] = useState(null);

  const userDetails = {
    token,
    setToken,
    loginData,
    setLoginData,
    signData,
    setSignData,
  };

  return (
    <UserContext.Provider value={userDetails}>
      {props.children}
    </UserContext.Provider>
  );
};
