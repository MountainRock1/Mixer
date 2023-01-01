import { createSlice } from "@reduxjs/toolkit";
const NUM_COLUMNS = 7;

export const stateSlice = createSlice({
  name: "state",
  initialState: {
    grid: [Array(NUM_COLUMNS).fill("")],
    selectedColor: "red",
  },
  reducers: {
    addRow(state) {
      const newRow = Array(NUM_COLUMNS).fill("");
      if (state.grid.length < 2) {
        for (let i = 0; i < 5; i++) {
          state.grid.push(newRow);
        }
      }

      for (let i = 0; i < state.grid; i++) {
        console.log(state.grind[i]);
      }
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
