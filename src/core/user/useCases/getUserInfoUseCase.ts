import UserStore from "../domain/userStore";
import { getUserParams } from "../controller/userViewModel";

type GetUserStore = Pick<UserStore, "getUser">;

const getUserUseCase = (store: GetUserStore, params: getUserParams) => {
  const { email, password } = params;
  store.getUser({email, password});
};

export { getUserUseCase };
