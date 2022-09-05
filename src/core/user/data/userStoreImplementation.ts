import React from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppRootState } from "../../../store/appStoreImplementation";
import type userStore from "../domain/userStore";
import type User from "../domain/userEntity";

import type { UserStoreState } from "./userReducer";

import { getUserAction, setUserAction } from "./userActions";

export const userSelector = (state: AppRootState) => state.user;

const useUserStoreImplementation = (): userStore => {
  const { user, isLoading } = useSelector<AppRootState, UserStoreState>(
    userSelector
  );

  const dispatch = useDispatch();

  const setUser = React.useCallback(
    (user: User) => setUserAction(user)(dispatch),
    [dispatch]
  );

  const getUser = React.useCallback(
    (params: any) => {
      return getUserAction(params)(dispatch) as unknown as Promise<User>
    },
    [dispatch]
  );

  return {
    user,
    isLoading,
    setUser,
    getUser,
  };
};

export { useUserStoreImplementation };
