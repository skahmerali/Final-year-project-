export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [emailErr, setEmailErr] = useState(false);
// const [pwdError, setPwdError] = useState(false);
// const validate = () => {
//    if (!validEmail.test(email)) {
//       setEmailErr(true);
//    }
//    if (!validPassword.test(password)) {
//       setPwdError(true);
//    }
// };
