import React, {useState} from 'react';

export default function LoginForm() {
    // 1. hook
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // 2. initialization
    const updateUsername = (event) => {
        setUsername(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = () => {
        if (username === "rotiprataguy" && password === "rotiprata123") {
            alert("Login success");
        } else {
            alert("Invalid login");
        }
    }
    // 3. return jsx
    return (
        <>
        <div>
            <label>Username</label>
            <input type="text" value={username} onChange={updateUsername}/>

            <label>Password</label>
            <input type="text" value={password} onChange={updatePassword}/>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}