import { createSlice } from "@reduxjs/toolkit";

import { save_tokens_constant } from "../../constant";
import { login_async } from "../authService";
import { asyncStatus } from "../../../utils/asyncStatus";

let initialState = {
  data: null,
  login_status: asyncStatus.IDLE,
  userAuth: false,
  check_auth_status: asyncStatus.IDLE,
  check_auth_data:null
};

const auth_slice = createSlice({
  name: "userAuth",
  initialState,

  reducers: {
    setAuthFalseState(state, actions) {
      state.userAuth = false;
    },
    setAuthState(state, {payload}) {
      state.userAuth = payload;
      state.check_auth_status=asyncStatus.SUCCEEDED
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login_async.pending, (state, action) => {
      state.login_status = asyncStatus.LOADING;
    });
    builder.addCase(login_async.fulfilled, (state, { payload }) => {
      console.log(payload);
      if (payload.success) {
        state.userAuth = true;
        state.data = payload;
        state.login_status = asyncStatus.SUCCEEDED;
        localStorage.setItem(
          save_tokens_constant,
          payload.auth_token
        );
      }
    });
    builder.addCase(login_async.rejected, (state, { payload }) => {
      state.login_status = asyncStatus.ERROR;
      state.userAuth = false;
      // state.user = null
    });
  },
});

export default auth_slice.reducer;

export const { setAuthFalseState ,setAuthState} = auth_slice.actions;