import React from "react";
import Form from "../../components/Shared/Form/Form";
// import Spinner from "../../components/Shared/Spinner";
// import { toast } from "react-toastify";

const Register = () => {
  return (
    <>
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/banner2.jpg" alt="RegisterPage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
    </>
  );
};

export default Register;
