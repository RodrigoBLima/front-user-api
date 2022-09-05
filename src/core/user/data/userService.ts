import type User from "../domain/userEntity";
import endpoints from "../../../infra/api/endpoints";
import FetchAdapter from "../../../infra/http/FetchAdapter";

interface UserResponse {
  data: User;
  message: string;
}

async function fetchUserData(params: {
  email: string;
  password: string;
}): Promise<UserResponse> {
  try {
    const fetchAdapter = new FetchAdapter();
    const response = await fetchAdapter.post(endpoints.LOGIN, params);
    return response;
  } catch (error) {
    throw error;
  }
}

export { fetchUserData };
