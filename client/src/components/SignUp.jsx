import React from "react";
import { useState } from "react";
import axios from "axios";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (body) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASEURL}/register`,
        body
      );
      console.log(response.json());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div>Sign Up</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{
            backgroundColor: "green",
            color: "#fff",
          }}
          onClick={(e) => {
            const body = {
              name,
              email,
              password,
            };
            console.log(body);
            registerUser(body);
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};
