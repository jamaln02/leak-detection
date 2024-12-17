import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios({
        method: "post",
        url: "https://leak-detection-v2.phpv8.aait-d.com/api/website/register-driver",
        data: {
          full_name: values.name,
          phone_code: values.phone_code,
          phone: values.phone,
          password: values.password,
        },
      });
      return response.data

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios({
        method: "post",
        url: "https://leak-detection-v2.phpv8.aait-d.com/api/website/login",
        data: {
          phone: values.phone,
          password: values.password,
        },
      });

      return response.data

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    isLoginModalOpen: false,
    isRegisterModalOpen: false,
    isShowPassword: false,
    isForgetModalOpen: false,
  },
  reducers: {
    openLoginModal: (state) => {
      state.isLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
    },

    openRegisterModal: (state) => {
      state.isRegisterModalOpen = true;
    },
    closeRegisterModal: (state) => {
      state.isRegisterModalOpen = false;
    },
    openForgetPasswordModal: (state) => {
      state.isForgetModalOpen = true
    },
    closeForgetPassModal: (state) => {
      state.isForgetModalOpen = false
    },
    showPassword: (state) => {
      state.isShowPassword = !state.isShowPassword
    },
    switchModal: (state) => {
      if (state.isLoginModalOpen) {
        state.isLoginModalOpen = false
        state.isRegisterModalOpen = true
      } else {
        state.isLoginModalOpen = true
        state.isRegisterModalOpen = false
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { openLoginModal, closeLoginModal, openRegisterModal,
  closeRegisterModal, showPassword, switchModal, openForgetPasswordModal,
  closeForgetPassModal } = authSlice.actions;

export const auth = authSlice.reducer;

