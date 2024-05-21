import React, { useState } from "react";
import InputType from "../../Shared/Form/InputType";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../../context/Auth";
const Modal = () => {
  const [inventoryType, setinventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [donorEmail, setDonorEmail] = useState("");
  const [user] = useAuth();

  const handleSubmit = async () => {
    const token = user.token;
    try {
      if (!bloodGroup || !quantity) {
        toast.error("Please provide all fields");
      }
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/inventory/create-inventory`,
        { donorEmail, inventoryType, bloodGroup, quantity,email:user?.account.email,organisation:user?.account._id },{
                headers: {
                  Authorization: `Bearer ${token}`,
                },
        })
        if(data?.success){
            toast.success("New Record created successfully")
            window.location.reload()
        }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Manage Blood Record
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="d-flex mb-3 ">
                Blood Type: &nbsp;
                <div className="form-check ms-3">
                  <input
                    type="radio"
                    name="Radio"
                    defaultChecked
                    value={"in"}
                    onChange={(e) => setinventoryType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="in" className="form-check-label">
                    In
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    type="radio"
                    name="Radio"
                    value={"out"}
                    onChange={(e) => setinventoryType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="out" className="form-check-label">
                    Out
                  </label>
                </div>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option selected>Select the blood group</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
              </select>
              <InputType
                labelText={"Donor Email"}
                labelFor={"donorEmail"}
                inputType={"email"}
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
              />
              <InputType
                labelText={"Quantity"}
                labelFor={"quantity (Ml)"}
                inputType={"Number"}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
