import React from "react";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.container}>
      <form>
        <h2>Sign Up</h2>
        <div>
          <label    for="name">Name </label>
          <br/>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label    for="email">Email </label>
          <br/>
          <input type="text" id="email" name="email" />
        </div>
        <div>
          <label    for="password">Password </label>
          <br/>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label    for="ConfirmPassword">ConfirmPassword </label>
          <br/>
          <input type="password" id="ConfirmPassword" name="ConfirmPassword" />
        </div>
        <div className={styles.last}>
          <label    for="Accept">Accept our terms </label>
          <input type="checkbox" id="Accept" name="Accept" />
        </div>
        <button className={styles.login}>Login</button>
        <button type="submit" className={styles.submit}>Submit</button>
      </form>
    </div>
  );
};

export default Signup;
