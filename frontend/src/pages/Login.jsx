import axios from "axios";
import React, { useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import "./css/Login.css";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const BASE_API_URL = "http://localhost/api/v1";

  const signIn = useSignIn();

  const handleLogin = async () => {
    try {
      const params = new URLSearchParams();
      params.append("username", email);
      params.append("password", password);

      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      };
      const response = await axios.post(
        `${BASE_API_URL}/login`,
        params,
        config
      );

      if (
        signIn({
          auth: {
            token: response.data.access_token,
            type: "Bearer",
          },
          userState: {
            email,
          },
        })
      ) {
        setEmail("");
        setPassword("");

        console.log("login success");
      }
    } catch (error) {
      console.log("login failed", error);
    }
  };

  const handleRegister = async () => {
    try {
      const params = new URLSearchParams();
      params.append("name", firstName + " " + lastName);
      params.append("email", email);
      params.append("password", password);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      };
      await axios.post(`${BASE_API_URL}/register`, params, config);

      console.log("register success");
    } catch (error) {
      console.log("register failed", error);
    }
  };

  return (
    <div className="login">
      {isLoggedIn ? (
        <div className="signup-container">
          <h1>Login</h1>
          <div className="signup-fields">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={() => handleLogin()}>Sign in</button>
          <p onClick={() => setIsLoggedIn(false)} className="signup-text">
            Create account
          </p>
          <div className="agree">
            <hr />
            <p>
              By continuing, you agree to <u>our Terms of Use</u>,{" "}
              <u>our Privacy Policy</u> and <u>our Disclaimer</u>.
            </p>
          </div>
        </div>
      ) : (
        <div className="signup-container">
          <h1>Create Account</h1>
          <div className="signup-fields">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={() => handleRegister()}>Create</button>
          <p onClick={() => setIsLoggedIn(true)} className="login-text">
            Login
          </p>
          <div className="agree">
            <hr />
            <p>
              <i>
                By continuing, you agree to <u>our Terms of Use</u>,{" "}
                <u>our Privacy Policy</u> and <u>our Disclaimer</u>.
              </i>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
