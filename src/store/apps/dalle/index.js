import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import DalleServices from '../../../Services/dalle.service';
import { toast } from 'react-toastify';

// Initial State
const initialState = {
  generatedImages: {},
  AllNFTs: [],
  status: 'idle',
};

// Fetch Clients
export const ImageGenerateAction = createAsyncThunk('dalle/generate', async (body, { dispatch, getState }) => {
  dispatch(slice.actions.handleStatus('pending'))
  try {
    const response = await DalleServices.GenerateImage(body);
    dispatch(slice.actions.handleStatus('success'));
    return response?.data
  } catch (error) {
    dispatch(slice.actions.handleStatus('error'));
    toast.error(error.response.data.message || "Something went wrong!")
    return error.response.data;
  }
});

export const getAllNFTAction = createAsyncThunk('dalle/getAll', async (body, { dispatch, getState }) => {
  dispatch(slice.actions.handleStatus('pending'))
  try {
    const response = await DalleServices.getAll();
    dispatch(slice.actions.handleStatus('success'));
    return response?.data
  } catch (error) {
    dispatch(slice.actions.handleStatus('error'));
    toast.error(error.response.data.message || "Something went wrong!")
    return error.response.data;
  }
});

export const slice = createSlice({
  name: 'dalle',
  initialState,
  reducers: {
    handleStatus: (state, action) => {
      state.status = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(ImageGenerateAction.fulfilled, (state, action) => {
      const { data } = action?.payload;
      state.generatedImages = data || {}
    });
    builder.addCase(getAllNFTAction.fulfilled, (state, action) => {
      const { data } = action?.payload;
      state.AllNFTs = data || []
    });
   },

});

export default slice.reducer;
