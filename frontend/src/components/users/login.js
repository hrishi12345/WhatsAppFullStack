import { GoogleLogin } from "@react-oauth/google";

import { useNavigate } from "react-router-dom";

import jwtDecode from "jwt-decode";
import { addUser } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";
import { useContext } from "react";

function Login(props) {
  const navigate = useNavigate()
  const {setAccount}=useContext(AccountContext)
  const loginHandler = async (res) => {
    // event.preventDefault();
    // const email = event.target.email.value;
    // const password = event.target.password.value;
    // const loginDetails = {
    //   email,
    //   password
    // };

    // try {
    //   const response = await axios.post("http://localhost:3001/user/loginuser", loginDetails);

    //   if (response.status === 201) {
    //     alert("User Login successfully");
    //     localStorage.setItem('token', response.data.token);
    //     navigate("/homepage"); // Programmatically navigate to "/homepage"
    //   }
    // } catch (error) {
    //   console.log("Error during login:", error);
    // }
    
    const decoded=jwtDecode(res.credential)
    console.log(decoded)
    const user=await addUser(decoded)
    console.log(user.status)
    if(user.status===200){
        alert('Login Successfully')
        navigate("/homepage");
        setAccount(decoded)
    }
  };
  const errorhandler=(res)=>{
    console.log(res)
  }

  return (
    // <form onSubmit={loginHandler}>
    //   <label htmlFor="email">Email:</label>
    //   <input id="email" />
    //   <label htmlFor="password">Password:</label>
    //   <input id="password" />
    //   <button type="submit">Submit</button>

    // </form>
    <GoogleLogin 
    onSuccess={loginHandler}
    onError={errorhandler}/>
  );
}

export default Login;
