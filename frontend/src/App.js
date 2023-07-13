import { Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SignUp from "./components/users/signup";
import Login from "./components/users/login";
import Home from "./components/Home/Home";
import Group from "./components/Home/Group";

import AccountProvider from "./context/AccountProvider"
function App() {
  const clientId=process.env.CLIENT_ID;
  return (
      <GoogleOAuthProvider clientId={clientId}>
       <AccountProvider>
        
      <Routes>
      
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Home />}/>
        <Route path="/group" element={<Group />} />
       
      </Routes>
      
      </AccountProvider>
      
      </GoogleOAuthProvider>
  );
}

export default App;
