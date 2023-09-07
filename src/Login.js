import React, { useState, useEffect } from "react";
import styles from "./Signup.module.css";
import validate from "./validate";
import notify from "./toast";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data,"login"));
    console.log(errors);
  }, [data, touched]);

  const changeHandler = (event) => {
      setData({ ...data, [event.target.name]: event.target.value });
  };

  const focused = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("Successfuly joined", "success");
    } else {
      notify("Failed to join", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <h2>Log In</h2>
        <div className={styles.con}>
          <label for="email">Email </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={changeHandler}
            onBlur={focused}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.con}>
          <label for="password">Password </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={changeHandler}
            onBlur={focused}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div>
        <Link to="/signup">Sign Up</Link>
          <button type="submit" className={styles.submit}>
            login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
