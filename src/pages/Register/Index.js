import React from "react";
import NavbarTiktak from "../../Components/Navbar/Index";
import RegisterForm from "../../Components/RegisterForm/Index";
import ToastTiktak from "../../Components/Toast/Index";
import "./Style.css";
function Register() {
  return (
    <>
      <NavbarTiktak />
      <center>
        <ToastTiktak />
      </center>
      <div className="margin-top">
        <RegisterForm />
      </div>
    </>
  );
}

export default Register;
