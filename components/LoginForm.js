import { useState } from "react";
import Router from "next/router";

import { loginUser } from "../lib/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("Lucio_Hettinger@annie.ca");
  const [password, setPassword] = useState("demarco.info");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    loginUser(email, password)
      .then(() => {
        Router.push("/profile");
      })
      .catch((err) => {
        console.error(err);
        setError((err.response && err.response.data) || err.message);
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="email" placeholder="email" value={email} onChange={updateEmail} />
      </div>
      <div>
        <input type="password" placeholder="password" value={password} onChange={updatePassword} />
      </div>
      <button disabled={isLoading} type="submit">
        {isLoading ? "Sending" : "Submit"}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default LoginForm;
