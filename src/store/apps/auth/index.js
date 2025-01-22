import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthServices from '../../../Services/auth.service';
import { toast } from 'react-toastify';
import cookies from '../../../utils/cookies';

// Initial State
const initialState = {
  user: {},
  refreshToken: "",
  accessToken: "",
  status: "pending" | "error" | "success" | "idle",
  logoutStatus: "pending" | "error" | "success" | "idle"

};

// Fetch Clients
export const connectToWalletAction = createAsyncThunk('auth/walletConnect', async (body, { dispatch, getState }) => {
  dispatch(slice.actions.handleStatus('pending'))
  try {
    let response = await AuthServices.connectToWallet(body);
    cookies.set("accessToken", response?.data.data.tokens.accessToken, {
      path: "/",
    });
    dispatch(slice.actions.handleStatus("success"));
    toast.success(response?.data?.message || "Success");
    return response?.data
  } catch (error) {
    dispatch(slice.actions.handleStatus('error'));
    toast.error(error?.response?.data?.message || "Something went wrong!")
    console.log("Something Went Wrong")
  }
});

export const verifyAction = createAsyncThunk("auth/verify", async (data, { dispatch, getState }) => {
  dispatch(slice.actions.handleStatus("pending"));
  try {
    const accessToken = cookies.get("accessToken");
    if (!accessToken) {
      return dispatch(slice.actions.handleStatus("error"));
    }
    const response = await AuthServices.verify();
    dispatch(slice.actions.handleUser(response.data.data));
    dispatch(slice.actions.handleStatus("success"));
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message || "Something went wrong!");
    cookies.remove("accessToken", { path: "/" });
    dispatch(slice.actions.handleStatus("error"));
    return error.response.data;
  }
}
);

export const disconnectWalletAction = createAsyncThunk("auth/signout", async (data, { getState, dispatch }) => {
  dispatch(slice.actions.handleLogoutStatusStatus("pending"));
  try {
    const response = await AuthServices.logout();
    cookies.remove('accessToken', { path: '/' })
    dispatch(slice.actions.handleLogoutStatusStatus("success"));
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message || "Something went wrong!");
    cookies.remove('accessToken', { path: '/' })
    dispatch(slice.actions.handleLogoutStatusStatus("error"));
    return error.response.data;
  }
}
);

export const updateProfileAction = createAsyncThunk('auth/updateprofile', async (body, { dispatch, getState }) => {
  dispatch(slice.actions.handleStatus('pending'))
  try {
    let response = await AuthServices.updateProfile(body);
    dispatch(slice.actions.handleStatus("success"));
    toast.success(response?.data?.message || "Success");
    return response?.data
  } catch (error) {
    dispatch(slice.actions.handleStatus('error'));
    toast.error(error?.response?.data?.message || "Something went wrong!")
    console.log("Something Went Wrong")
  }
});
export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleStatus: (state, action) => {
      state.status = action.payload;
    },
    handleLogoutStatusStatus: (state, action) => {
      state.logoutStatus = action.payload;
    },
    handleUser: (state, action) => {
      action.payload.user.role_code =
        action.payload.user?.role?.code || action.payload.user?.roleId?.code;
      return {
        ...state,
        user: action.payload.user,
        refreshToken: action.payload.tokens.refreshToken,
        accessToken: action.payload.tokens.accessToken,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(connectToWalletAction.fulfilled, (state, action) => {
      const data = action?.payload?.data;
      if (data?.tokens) {
        state.user = data?.user || {};
        state.refreshToken = data?.tokens?.refreshToken || "";
      }
    });

    builder.addCase(verifyAction.fulfilled, (state, action) => {
      const data = action?.payload?.data;
      if (data) {
        state.user = data?.user || {};
        state.refreshToken = data?.tokens?.refreshToken || "";
      }
    });
    builder.addCase(disconnectWalletAction.fulfilled, (state, action) => {
      state.user = null;
      state.accessToken = {};
      state.refreshToken = {};
    });
    builder.addCase(updateProfileAction.fulfilled, (state, action) => {
      const data = action?.payload?.data;
      state.user = data;
      // state.accessToken = {};
      // state.refreshToken = {};
    });
  },

});

export const { handleStatus } = slice.actions;

export default slice.reducer;
