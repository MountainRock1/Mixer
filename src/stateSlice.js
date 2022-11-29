import { createSlice } from '@reduxjs/toolkit';

export const stateSlice = createSlice({
  name: 'state',
  initialState: {
    grid: [],
    selectedColor: 'red',
  },
  reducers: {},
});

export default stateSlice.reducer;
