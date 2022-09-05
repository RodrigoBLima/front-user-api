import type User from "./userEntity";

export default interface UserStore {
  user: User | undefined;
  isLoading: boolean;
  getUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User>;
  setUser(user: User): void;
}
