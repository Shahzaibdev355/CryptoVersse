import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import NftServices from '../../../Services/nft.service';
import { toast } from 'react-toastify';

// Initial State
const initialState = {
  allNft: {},
  status: 'idle',
};

// Fetch Clients
export const GetAllAction = createAsyncThunk('nft/getAll', async (body, { dispatch, getState }) => {
  dispatch(slice.actions.handleStatus('pending'))
  try {
    const response = await NftServices.GetAll(body);
    dispatch(slice.actions.handleStatus('success'));
    return response?.data
  } catch (error) {
    dispatch(slice.actions.handleStatus('error'));
    toast.error(error.response.data.message || "Something went wrong!")
    return error.response.data;
  }
});

// export const getAllNFTAction = createAsyncThunk('nft/getAll', async (body, { dispatch, getState }) => {
//   dispatch(slice.actions.handleStatus('pending'))
//   try {
//     const response = await DalleServices.getAll();
//     dispatch(slice.actions.handleStatus('success'));
//     return response?.data
//   } catch (error) {
//     dispatch(slice.actions.handleStatus('error'));
//     toast.error(error.response.data.message || "Something went wrong!")
//     return error.response.data;
//   }
// });

export const slice = createSlice({
  name: 'stabilityAi',
  initialState,
  reducers: {
    handleStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetAllAction.fulfilled, (state, action) => {
      const { data } = action?.payload;
      state.allNft = data || []
    });

  },

});

export default slice.reducer;
