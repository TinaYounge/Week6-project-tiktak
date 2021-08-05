import React from "react";
import LoginForm from "../../Components/Login/Index";
import NavbarTiktak from "../../Components/Navbar/Index";
import ToastTiktak from "../../Components/Toast/Index";
function Login() {
  return (
    <>
      <NavbarTiktak />
      <center>
        <ToastTiktak />
      </center>
      <div className="margin-top">
        <LoginForm />
      </div>
    </>
  );
}
export default Login;
