import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";

import Login from "./components/login/Login";
import Home from "./components/home/Home";

import Error from "./components/error/Error";
import Header from "./components/header/Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [formData, setFormData] = useState({});
  const mimicAccount = {
    username: "jon",
    email: "jon@email.com",
    password: "password",
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (
      formData.username === mimicAccount.username ||
      formData.username === mimicAccount.email
    ) {
      if (formData.password === mimicAccount.password) {
        setLoggedIn(!loggedIn);
        return alert("Logged in");
      }
    }
    alert("Incorrect username, email, or password");
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <Login
          loggedIn={loggedIn}
          handleLogin={handleLogin}
          formData={formData}
          setFormData={setFormData}
        />
      ),
    },
    { path: "/", element: <Home />, errorElement: <Error /> },
  ]);

  return (
    <div>
      <Header loggedIn={loggedIn} handleLogin={handleLogin} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
