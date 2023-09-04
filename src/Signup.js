import React from "react";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.container}>
      <form>
        <h2>Sign Up</h2>
        <div>
          <label>Name </label>
          <br/>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label>Email </label>
          <br/>
          <input type="text" id="email" name="email" />
        </div>
        <div>
          <label>Password </label>
          <br/>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label>ConfirmPassword </label>
          <br/>
          <input type="password" id="ConfirmPassword" name="ConfirmPassword" />
        </div>
        <div className={styles.last}>
          <label>Accept our terms </label>
          <input type="checkbox" id="ConfirmPassword" name="ConfirmPassword" />
        </div>
        <button className={styles.login}>Login</button>
        <button type="submit" className={styles.submit}>Submit</button>
      </form>
    </div>
  );
};

export default Signup;
