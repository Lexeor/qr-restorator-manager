import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  token: "",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      let { name, token } = action.payload;
      state.name = name;
      state.token = token;
    },
    logout: (state) => {
      console.log("logout");
      state = initialState;
    },
  },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
