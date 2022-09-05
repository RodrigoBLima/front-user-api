import React from "react";

import UserStore from "../domain/userStore";

import { getUserUseCase } from "../useCases/getUserInfoUseCase";
import { setUserUseCase } from "../useCases/setUserInfoUseCase";

export interface getUserParams {
  email: string;
  password: string;
}

function useUserViewModel(store: UserStore | any) {
  const getUser = React.useCallback(
    function (params: getUserParams) {
      getUserUseCase(store, params);
    },
    [store]
  );

  const setUser = React.useCallback(
    function () {
      setUserUseCase(store);
    },
    [store]
  );

  return {
    user: store.user,
    shouldShowSpinner: typeof store.user === "undefined" || store.isLoading,
    getUser,
    setUser,
  };
}

export { useUserViewModel };
