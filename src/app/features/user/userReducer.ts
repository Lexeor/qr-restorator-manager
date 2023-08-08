import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  restaurant: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state, action) => {
      let { name, restaurant, email } = action.payload;
      state.name = name;
      state.restaurant = restaurant;
      state.email = email;
    },
  },
});

export default userSlice.reducer;
export const { set } = userSlice.actions;
