import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  let history = useHistory();

  async function CheckLogin() {
    try {
      if (!email) {
        alert("Email cannot be empty");
        return false;
      }
      let res = await fetch(`http://localhost:5000/login/${email}`);
      let resultObject = await res.json();
      if (resultObject.userCreated === true) {
        alert("User created!");
      }
      history.push("/sightings");
    } catch (e) {
      console.error(e.message);
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <>
      <h3>Log in to track your Data</h3>
      <form onSubmit={submitForm}>
        <label>Log in or Register: &nbsp;</label>
        <input
          value={email}
          placeholder="Email"
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        ></input>
        &nbsp;
        <button onClick={CheckLogin}>Submit</button>
      </form>
    </>
  );
};

export default Login;
