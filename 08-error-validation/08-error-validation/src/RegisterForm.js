import React, {useState} from 'react'

export default function RegisterForm() {

    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
      setUsernameError("");
    }

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      setEmailError("");
    }

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
      setPasswordError("");
    }

    const handleSubmit = () => {

      if (userName === "") {
        setUsernameError("Username required");
      }

      if (!email) {
        setEmailError ("Email required");
      } else if (!/^\S+@\S+\.\S+$/.test(email)) { 
        setEmailError("Invalid email address");
      }

      if (!password) {
        setPasswordError ("Password required");
      }

    }
    return (
      <React.Fragment>
        <div>
            <label>Username:</label>
            <input type="text" name="username" value={userName} onChange={handleUsernameChange}/>
            <span class="error">{usernameError}</span>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" name="email" value={email} onChange={handleEmailChange}/>
            <span class="error">{emailError}</span>
        </div>
        <div>
            <label>Password:</label>
            <input type="text" name="password" value={password} onChange={handlePasswordChange}/>
            <span class="error">{passwordError}</span>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </React.Fragment>
    )
}