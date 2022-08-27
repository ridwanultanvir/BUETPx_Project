const doLogIn = (username) => {
    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", true);
  };
  
  const isLoggedIn = () => {
    return Boolean(localStorage.getItem("isLoggedIn"));
  };
  
  
  const logOut = (props) =>{
  
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    props.history.push("/login");
  
  };
  
  export default {
    doLogIn,
    isLoggedIn,
    logOut
  };
  