import { useEffect, useState } from "react";

import { UserContext } from "./Context";

export const UsersData = (props) => {
  const [loginData, setLoginData] = useState(null);
  const [signData, setSignData] = useState();
  const [token, setToken] = useState("");
  const userDetails = {
    loginData,
    setLoginData,
    signData,
    setSignData,
    token,
    setToken,
  };

  useEffect(() => {
    console.log(loginData, 999);
  }, [loginData]);
  return (
    <UserContext.Provider value={userDetails}>
      {props.children}
    </UserContext.Provider>
  );
};
