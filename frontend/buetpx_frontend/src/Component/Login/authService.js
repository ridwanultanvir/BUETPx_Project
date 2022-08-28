const doLogIn = (username) => {
    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", true);
    fetch("http://localhost:8000/getaccidfromemail/"+username, requestOptions)
    .then( response => 
      {
        // response.json()
        console.log(response);
        if (response.ok) {  
          response.json()
          .then(data=>{
            console.log("response:",data);
            localStorage.setItem("uid", data);
           
            
          })
        }
      })
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
  