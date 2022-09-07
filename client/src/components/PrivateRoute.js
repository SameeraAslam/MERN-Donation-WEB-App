import { Navigate, useNavigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const isUser = localStorage.getItem("token");
  console.log(isUser, "isUser");

  return isUser ? children : <Navigate to="/login" replace />;
};
export default PrivateRoute;
