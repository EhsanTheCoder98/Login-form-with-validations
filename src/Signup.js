import React , {useState,useEffect} from "react";
import styles from "./Signup.module.css";
import validate from "./validate";

const Signup = () => {
  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    Accept:false,
  })
  
  const [errors,setErrors] = useState({});

  useEffect(()=>{
    setErrors(validate(data));
    console.log(errors)
  },[data])

  const changeHandler = (event) => {
    if(event.target.name === "Accept"){
      setData({...data , [event.target.name] : event.target.checked })
      console.log(event.target.checked)
    }else{
      setData({...data , [event.target.name] : event.target.value})
      console.log(event.target.value)
    }
  }

  return (
    <div className={styles.container}>
      <form>
        <h2>Sign Up</h2>
        <div>
          <label    for="name">Name </label>
          <br/>
          <input type="text" id="name" name="name"  onChange={changeHandler} />
        </div>
        <div>
          <label    for="email">Email </label>
          <br/>
          <input type="text" id="email" name="email"  onChange={changeHandler} />
        </div>
        <div>
          <label    for="password">Password </label>
          <br/>
          <input type="password" id="password" name="password"  onChange={changeHandler} />
        </div>
        <div>
          <label    for="ConfirmPassword">ConfirmPassword </label>
          <br/>
          <input type="password" id="ConfirmPassword" name="confirmPassword"  onChange={changeHandler} />
        </div>
        <div className={styles.last}>
          <label    for="Accept">Accept our terms </label>
          <input type="checkbox" id="Accept" name="Accept"  onChange={changeHandler} />
        </div>
        <button className={styles.login}>Login</button>
        <button type="submit" className={styles.submit}>Submit</button>
      </form>
    </div>
  );
};

export default Signup;
