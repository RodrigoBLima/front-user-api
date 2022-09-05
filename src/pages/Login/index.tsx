import React from "react";

import { useUserViewModel } from "../../core/user/controller/userViewModel";
import { useUserStoreImplementation } from "../../core/user/data/userStoreImplementation";

function Login() {
  const store = useUserStoreImplementation();
  const { shouldShowSpinner, getUser } = useUserViewModel(store);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeEmail(event: React.FormEvent<HTMLInputElement>) {
    setEmail((event.target as HTMLInputElement).value);
  }

  function handleChangePassword(event: React.FormEvent<HTMLInputElement>) {
    setPassword((event.target as HTMLInputElement).value);
  }

  function handleSubmitLogin() {
    const params = {
      email,
      password,
    };

    getUser(params);
  }

  if (shouldShowSpinner) return <p>Carregando...</p>;

  return (
    <div id="login-container">
      <input
        type="email"
        name="email-login-input"
        id="email-login-input"
        value={email}
        onChange={(event: React.FormEvent<HTMLInputElement>) =>
          handleChangeEmail(event)
        }
      />
      <input
        type="password"
        name="password-login-input"
        id="password-login-input"
        value={password}
        onChange={(event: React.FormEvent<HTMLInputElement>) =>
          handleChangePassword(event)
        }
      />

      <button type="button" onClick={() => handleSubmitLogin()}>
        Entrar
      </button>
    </div>
  );
}

export default Login;
