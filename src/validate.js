const validate = (data) => {
  const error = {};

  if (!data.name.trim()) {
    error.name = "Username is needed!";
  } else {
    delete error.name;
  }
  if (!data.email) {
    error.email = "Email is needed!";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    error.email = "Email is not valid!";
  } else {
    delete error.email;
  }
  if (data.password.lenght < 6) {
    error.password = "Password should be at least 6 charecters";
  } else {
    delete error.password;
  }
  if (
    !data.confirmPassword ||
    data.confirmPassword !== data.password ||
    data.confirmPassword.lenght < 6
  ) {
    error.confirmPassword = "Does not match with your password!";
  } else {
    delete error.confirmPassword;
  }
  if (!data.Accept) {
    error.Accept = "Policy acception is needed!";
  } else {
    delete error.Accept;
  }

  return error;
}; 

export default validate;