import type { AnyAction } from "redux";
import type UserStore from "../domain/userStore";
import * as actionTypes from "./userActionTypes";

type UserStoreState = Omit<UserStore, "setUser" | "getUser">;

const INITIAL_STATE: UserStoreState = {
  user: {
    name: "",
    email: "",
    password: "",
    authenticated: false,
  },
  isLoading: false,
};

const userReducer = (
  state: UserStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.user };
    case actionTypes.GET_USER:
      return { ...state, isLoading: true };
    case actionTypes.GET_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.user };

    default:
      return state;
  }
};

export { userReducer };
export type { UserStoreState };
