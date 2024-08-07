import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setToken, token }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post(`https://fsa-jwt-practice.herokuapp.com/signup`, formData)
        .then((response) => {
          console.log(response);
          if (response.data.success) {
            console.log(response.data.token);
            localStorage.setItem("token", response.data.token);

            setToken(response.data.token);
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  if (token) {
    navigate("/");
  }

  return (
    <div>
      <h1>Login to use Puppybowl</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={handleInput} />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
