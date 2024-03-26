import { useState, useEffect } from "react";

import "./Login.scss";

export default function Login({
  loggedIn,
  handleLogin,
  formData,
  setFormData,
}) {
  const handleChange = (e) => {
    if (e.target.value === "") return;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin} className="login__card form">
        <div className="login__card-title">Login</div>
        <label htmlFor="username">
          <p className="form-label">Username/Email:</p>
          <input
            type="text"
            name="username"
            className="form-control"
            onChange={handleChange}
            value={formData.username || ""}
          />
        </label>
        <label htmlFor="password">
          <p className="form-label">Password:</p>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            value={formData.password || ""}
          />
        </label>
        <button type="submit" className="btn btn-primary login__card-btn">
          Login
        </button>
      </form>
    </div>
  );
}
