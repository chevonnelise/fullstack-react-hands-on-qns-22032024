import React, { useState } from 'react'

export default function RegisterForm() {

  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[A-Za-z.-]+\.[a-zA-Z.]{2,}$/;
  const textRegex = /^[a-zA-Z0-9]{1,15}$/;

  function validateUsername() {
    if (textRegex.test(userName)) {
      setUsernameError("");
    } else {
      setUsernameError("Username must be less than 15 characters and cannot contain any special characters");
    }
  }

  function validateEmail() {
    if (emailRegex.test(email)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email format");
    }
  }

  function validatePassword() {
    if (textRegex.test(password)) {
      setPasswordError("");
    } else {
      setPasswordError("Invalid password format, cannot contain special characters like #^!(@&^*)");
    }
  }

  function validateAll() {
    validateUsername();
    validateEmail();
    validatePassword();
  }


  // To prevent Cross Site Scripting: should avoid some of these special characters
  // avoid: %, *

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  //   setUsernameError("");
  // }

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  //   setEmailError("");
  // }

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  //   setPasswordError("");
  // }

  // const handleSubmit = () => {

  //   if (userName === "") {
  //     setUsernameError("Username required");
  //   }

  //   if (!email) {
  //     setEmailError ("Email required");
  //   } else if (!/^\S+@\S+\.\S+$/.test(email)) { 
  //     setEmailError("Invalid email address");
  //   }

  //   if (!password) {
  //     setPasswordError ("Password required");
  //   }

  // }

  return (
    <React.Fragment>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={userName} onChange={(event) => setUsername(event.target.value)} />
        <span class="error" style={{ color: "red" }}>{usernameError}</span>
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <span class="error" style={{ color: "red" }}>{emailError}</span>
      </div>
      <div>
        <label>Password:</label>
        <input type="text" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <span class="error" style={{ color: "red" }}>{passwordError}</span>
      </div>
      <button onClick={() => validateAll()}>Submit</button>
    </React.Fragment>
  )
}