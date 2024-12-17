import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendOtp = createAsyncThunk(
  "auth/sendOtp",
  async (values, thunkAPI) => {

    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios({
        method: "post",
        url: "https://phpv8.aait-d.com/leak_detection/public/api/website/send-code",
        data: {
          phone: values.phone,
          phone_code: values.phone_code,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async (enteredOtp, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios({
        method: "post",
        url: 'https://leak-detection-v2.phpv8.aait-d.com/api/client/check-code',
        data: {
          code: enteredOtp,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const otpSlice = createSlice({
  name: "otp",
  initialState: {
    isOtpValid: false,
    loading: false,
    error: null,
    isConfirmIdModalOpen: false,
  },
  reducers: {
    openConfirmIdModal: (state) => {
      state.isConfirmIdModalOpen = true
    },
    closeConfirmIdModal: (state) => {
      state.isConfirmIdModalOpen = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {

          state.isOtpValid = true;
        } else {

          state.isOtpValid = false;
        }
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});
export const { openConfirmIdModal, closeConfirmIdModal } = otpSlice.actions
export const otp = otpSlice.reducer;