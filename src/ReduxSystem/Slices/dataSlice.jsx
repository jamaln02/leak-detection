import axios from 'axios';
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getHomeData = createAsyncThunk(
  "getHomeData",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const details = await axios({
        method: "get",
        url: "https://leak-detection.phpv8.aait-d.com/api/website/home",
      });

      return details.data;


    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: false,
    error: null,
    isMenuOpen: false

  },
  reducers: {
    openMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getHomeData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getHomeData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;

    });
    builder.addCase(getHomeData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { openMenu, closeMenu } = dataSlice.actions

export const allData = dataSlice.reducer;
