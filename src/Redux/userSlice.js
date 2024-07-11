import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { updateName, updateEmail } = userSlice.actions;

export default userSlice.reducer;
