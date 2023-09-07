const validate = (data, type) => {
  const error = {};
  if (type === "signup") {
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
    if (!data.password) {
      error.password = "Enter Password";
    } else if (data.password.length < 6) {
      error.password = "at least 6 charecters";
    } else {
      delete error.password;
    }
    if (!data.confirmPassword || data.confirmPassword !== data.password) {
      error.confirmPassword = "Do not match!";
    } else {
      delete error.confirmPassword;
    }
    if (!data.Accept) {
      error.Accept = "Policy acception is needed!";
    } else {
      delete error.Accept;
    }
  } else {
    if (!data.email) {
      error.email = "Email is needed!";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      error.email = "Email is not valid!";
    } else {
      delete error.email;
    }
    if (!data.password) {
      error.password = "Enter Password";
    } else if (data.password.length < 6) {
      error.password = "at least 6 charecters";
    } else {
      delete error.password;
    }
  }

  return error;
};

export default validate;
