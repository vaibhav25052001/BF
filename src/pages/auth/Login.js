import React from "react";
import Form from "../../components/Shared/Form/Form";
// import Spinner from "../../components/Shared/Spinner";
// import { toast } from "react-toastify";

const Login = () => {
  
  return (
    <>
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/banner1.jpg" alt="LoginPage" />
          </div>
          <div className="col-md-4 form-container">
            <Form formTitle={"Login"} submitBtn={"Login"} formType={"login"} />
          </div>
        </div>
    </>
  );
};

export default Login;
