import { createContext } from "react";

export const UserContext = createContext({
  loginData: "",
  setLoginData: () => {},
  signData: "",
  setSignData: () => {},
  token: "",
  setToken: () => {},
});
