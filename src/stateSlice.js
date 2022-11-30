import { createSlice } from "@reduxjs/toolkit";
const NUM_COLUMNS = 20;

export const stateSlice = createSlice({
  name: "state",
  initialState: {
    grid: [Array(NUM_COLUMNS).fill("")],
    selectedColor: "red",
  },
  reducers: {
    addRow(state) {
      const newRow = Array(NUM_COLUMNS).fill("");
      state.grid.push(newRow);
    },
    pickColor(state, action) {
      state.selectedColor = action.payload;
    },
    colorize(state, { payload }) {
      state.grid[payload.row][payload.column] = state.selectedColor;
    },
  },
});

export const { addRow, pickColor, colorize } = stateSlice.actions;

export default stateSlice.reducer;
