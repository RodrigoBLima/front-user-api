import type User from "../domain/userEntity";
import { fetchUserData } from "./userService";
import * as actionTypes from "./userActionTypes";
import { getUserParams } from "../controller/userViewModel";

const setUserAction = (user: User) => (dispatch: any) =>
  dispatch({ type: actionTypes.SET_USER, user });

const getUserAction =
  ({ email, password }: getUserParams) =>
  (dispatch: any) => {
    dispatch({ type: actionTypes.GET_USER });

    fetchUserData({ email, password })
      .then((response) => {
        const { data } = response;
        const authenticatedUser = { ...data, authenticated: true };
        dispatch({
          type: actionTypes.GET_USER_SUCCESS,
          user: authenticatedUser,
        });
      })
      .catch((error) => console.error("error on fetch user", error));
  };

export { setUserAction, getUserAction };
