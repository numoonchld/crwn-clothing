import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USER_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_USER_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

// reducer
// export const userReducerOld = (state = INITIAL_USER_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };
//     default:
//       return state;
//   }
// };
