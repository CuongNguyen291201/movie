import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: true,
    data: {},
    error: null
  },
  reducers: {
    startGetData: (state, action) => {
      state.loading = action.payload.loading;
    },
    getDataSuccess: (state, action) => {
      state.data = action.payload.data;
      state.error = null;
    },
    getDataFail: (state, action) => {
      state.data = {};
      state.error = action.payload.error;
    }
  }
});

export const { startGetData, getDataSuccess, getDataFail } = userSlice.actions;
export default userSlice.reducer;