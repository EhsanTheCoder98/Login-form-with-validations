import React, { useState, useEffect } from "react";
import styles from "./Signup.module.css";
import validate from "./validate";
import notify from "./toast";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    Accept: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data,"signup"));
    console.log(errors);
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "Accept") {
      setData({ ...data, [event.target.name]: event.target.checked });
      console.log(event.target.checked);
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
      console.log(event.target.value);
    }
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
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        Accept: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <h2>Sign Up</h2>
        <div className={styles.con}>
          <label for="name">Name </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={changeHandler}
            onBlur={focused}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
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
        <div className={styles.con}>
          <label for="ConfirmPassword">ConfirmPassword </label>
          <input
            type="password"
            id="ConfirmPassword"
            name="confirmPassword"
            onChange={changeHandler}
            onBlur={focused}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.last}>
          <label for="Accept">Accept our terms </label>
          <input
            type="checkbox"
            id="Accept"
            name="Accept"
            onChange={changeHandler}
            onBlur={focused}
          />
        </div>
        {errors.Accept && touched.Accept && <span>{errors.Accept}</span>}
        <div>
        <Link to="/login">Log In</Link>
          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
