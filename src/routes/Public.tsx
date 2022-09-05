import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { AppRootState } from "../store/appStoreImplementation";
import { UserStoreState } from "../core/user/data/userReducer";
import { userSelector } from "../core/user/data/userStoreImplementation";

export const PublicRoute = ({ children }: any) => {
  const { user } = useSelector<AppRootState, UserStoreState>(
    userSelector
  );
    
  return user?.authenticated === false ? (
    children
  ) : (
    <Navigate to="/home" />
  );
};