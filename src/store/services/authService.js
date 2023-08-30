import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { baseURL } from "../../config/router/apihandle/apiHandle";
import { type_constants } from "../constant";

export const login_async = createAsyncThunk(
  type_constants.ADMIN_LOGIN,
  async (login_data) => {
    try {
      const res = await axios.post(`${baseURL}/admin/login`, login_data);
      const data = await res.data;
      return data;
    } catch (error) {
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

// export const check_auth_async = createAsyncThunk(type_constants.CHECK_AUTH, async () => {
//   try {
//       const response = await apiHandle.get('/check-auth')
//       const res_data = await response.data
//       return res_data
//   } catch (error) {
//       console.log('error', { error });
//       if (error?.response?.data) {
//           throw Error(error.response.data.message)
//       }
//       else {
//           throw Error(error.message)
//       }

//   }

// }
// )