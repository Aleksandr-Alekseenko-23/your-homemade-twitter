import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, Filter, UserState } from "../utils/types/types";
import { fetchUsers, updateUserById } from "./operations";

const initialState: UserState = {
  users: [] as User[],
  filter: "All",
  isLoading: false,
  error: null,
  page: 1,
  hasMore: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    filterUsersByStatusSubscription(state, action: PayloadAction<Filter>) {
      state.filter = action.payload;
    },
    resetUsers: (state) => {
      state.users = [];
      state.page = 1;
    },
    incrementPage(state) {
      state.page++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = [...state.users, ...action.payload];
        state.hasMore =
          action.payload.length > 0 && action.payload.length === 9;
      })
      .addCase(updateUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        const { id, subscription, followers } = action.payload;
        const user = state.users.find((user) => user.id === id);
        if (user) {
          user.subscription = subscription;
          user.followers = followers;
        }
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default userSlice.reducer;

export const { filterUsersByStatusSubscription, resetUsers, incrementPage } =
  userSlice.actions;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
