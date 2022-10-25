import { createSlice } from '@reduxjs/toolkit';
import { getApplications, userApply } from './applicationActions';

// const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState = {
  loading: false,
  applicationInfo: null,
//   userToken,
  error: null,
  success: true,
};

const applicationSlice = createSlice({
  name: 'application',
  initialState,
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem('userToken');
//       state.loading = false;
//       state.applicationInfo = null;
//     //   state.userToken = null;
//       state.error = null;
//     },
//   },
  extraReducers: {
    [userApply.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
    },
    [userApply.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.applicationInfo = payload;
    },
    [userApply.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
    },
    [getApplications.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
    },
    [getApplications.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.applicationInfo = payload;
    },
    [getApplications.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

// export const { logout } = userSlice.actions;
export default applicationSlice;
