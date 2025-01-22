import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Service from '../../../Services/example.service';

// Initial State
const initialState = {
  data: [],
  byid: {},
  status: 'idle',
};

// Fetch Clients
export const fetchAllAction = createAsyncThunk('example/fetchAll', async (params, { dispatch, getState }) => {
  dispatch(slice.actions.handleStatus('pending'))
  try {
    const response = await Service.getAll();
    dispatch(slice.actions.handleStatus('success'));
    return response
  } catch (error) {
    dispatch(slice.actions.handleStatus('error'));
    console.log("Something Went Wrong")
  }
});

export const fetchByIdAction = createAsyncThunk('example/fetchbyId', async (params, { dispatch, getState }) => {
  dispatch(slice.actions.handleStatus('pending'))
  try {
    const response = await Service.getbyId(params);
    dispatch(slice.actions.handleStatus('success'));
    return response
  } catch (error) {
    dispatch(slice.actions.handleStatus('error'));
    console.log("Something Went Wrong")
  }
});


export const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    handleStatus: (state, action) => {
      state.status = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllAction.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.data = data || []
    });
    builder.addCase(fetchByIdAction.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.byid = data || {}
    });
  },

});

export const { handleStatus } = slice.actions;

export default slice.reducer;
