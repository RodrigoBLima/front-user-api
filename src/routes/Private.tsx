import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { AppRootState } from "../store/appStoreImplementation";
import { UserStoreState } from "../core/user/data/userReducer";
import { userSelector } from "../core/user/data/userStoreImplementation";

function PrivateRoute({ children }: any) {
  const { user } = useSelector<AppRootState, UserStoreState>(userSelector);

  return user && user?.authenticated === true ? children : <Navigate to="/" />;
}

export default PrivateRoute;
