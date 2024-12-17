import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (values, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios({
        method: "patch",
        url:
          "https://leak-detection-v2.phpv8.aait-d.com/api/client/reset-password",
        data: {
          new_password: values.password
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const passwordSlice = createSlice({
  name: "password",
  initialState: {
    loading: false,
    error: null,
    isChangePasswordModal: false
  },
  reducers: {
    openChangePasswordModal: (state) => {
      state.isChangePasswordModal = true
    },
    closeChangePasswordModal: (state) => {
      state.isChangePasswordModal = false
    },
  }
  ,
  extraReducers: (builder) => {
    builder
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { openChangePasswordModal, closeChangePasswordModal, switchToChangePassword } = passwordSlice.actions

export const password = passwordSlice.reducer;
