import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StabilityAiServices from '../../../Services/stabilityAi.service';
import { toast } from 'react-toastify';

// Initial State
const initialState = {
  nfts: {},
  status: 'idle',
};

// Fetch Clients
export const ImageToImageGenerateAction = createAsyncThunk('StabilityAi/imagetoimage', async (body, { dispatch, getState }) => {
  dispatch(slice.actions.handleStatus('pending'))
  try {
    const response = await StabilityAiServices.ImageToImageGeneration(body);
    dispatch(slice.actions.handleStatus('success'));
    return response?.data
  } catch (error) {
    dispatch(slice.actions.handleStatus('error'));
    toast.error(error.response.data.message || "Something went wrong!")
    return error.response.data;
  }
});
export const TextToImageGenerateAction = createAsyncThunk('StabilityAi/texttoimage', async (body, { dispatch, getState }) => {
  dispatch(slice.actions.handleStatus('pending'))
  try {
    const response = await StabilityAiServices.TextToImageGeneration(body);
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
    builder.addCase(ImageToImageGenerateAction.fulfilled, (state, action) => {
      const { data } = action?.payload;
      state.nfts = data || {}
    });
    builder.addCase(TextToImageGenerateAction.fulfilled, (state, action) => {
      const { data } = action?.payload;
      state.nfts = data || {}
    });
  },

});

export default slice.reducer;
