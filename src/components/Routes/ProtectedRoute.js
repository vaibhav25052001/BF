import { useEffect } from "react";
import { useAuth } from "../../context/Auth";
import axios from "axios";
import { toast } from "react-toastify";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useAuth();
  

  useEffect(() => {
    const authCheck = async () => {
      const token = user.token;
      const res = await axios.get(
        `${process.env.REACT_APP_API}/auth/current-user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.success) {
        setUser({
          ...user,
          account: res.data.user,
          token: token,
        });
      } else {
        toast.error(res.data.message);
      }
    };
    if (user?.token) authCheck();
  });
  if (localStorage.getItem('token')) return children;
  else return <Navigate to='/login' />;
};
export default ProtectedRoute;
