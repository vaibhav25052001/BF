import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/Auth";
const Header = () => {
  const navigate = useNavigate();
  const [user]=useAuth()
  // console.log(user)

  //logout
  const handleLogout = () => {
    localStorage.clear();
    toast("Logout Successfully");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <BiDonateBlood color="red" />
            Blood Bank App
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <BiUserCircle />
                {/* Welcome {user?.account.name || user?.account.hospitalName || user?.account.organisationName} &nbsp; */}
                {/* <span className="badge text-bg-secondary">{user?.account?.role}</span> */}
              </p>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
