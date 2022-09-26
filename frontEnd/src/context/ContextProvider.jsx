import { useState } from "react";

import { UserContext } from "./Context";

export const UsersData = (props) => {
  const [loginData, setLoginData] = useState({});
  const [signData, setSignData] = useState({});
  const [token, setToken] = useState("");
  const userDetails = {
    loginData,
    setLoginData,
    signData,
    setSignData,
    token,
    setToken,
  };
  return (
    <UserContext.Provider value={userDetails}>
      {props.children}
    </UserContext.Provider>
  );
};
