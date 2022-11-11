import { createContext } from "react";

export const UserContext = createContext({
  token: "",
  setToken: () => {},
  loginData: "",
  setLoginData: () => {},
  signData: "",
  setSignData: () => {},
});
