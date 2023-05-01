import { UserState } from "../utils/types/types";

export const selectUsers = (state: { users: UserState }): UserState =>
  state.users;
