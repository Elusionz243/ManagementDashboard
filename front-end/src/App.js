import { useState } from "react";

import "./App.scss";

function App() {
  const [formData, setFormData] = useState({});
  const mimicAccount = {
    username: "jon",
    email: "jon@email.com",
    password: "password",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      formData.username === mimicAccount.username ||
      formData.username === mimicAccount.email
    ) {
      if (formData.password === mimicAccount.password) {
        return alert("Logged in");
      }
    }
    alert("Incorrect username, email, or password");
  };

  const handleChange = (e) => {
    if (e.target.value === "") return;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <form onSubmit={handleLogin} className="form">
        <label htmlFor="username" className="form-label">
          Username/Email:
          <input
            type="text"
            name="username"
            className="form-control"
            onChange={handleChange}
            value={formData.username || ""}
          />
        </label>
        <label htmlFor="password" className="form-label">
          Password:
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
          />
        </label>
        <button>Login / Sign up</button>
      </form>
    </div>
  );
}

export default App;
