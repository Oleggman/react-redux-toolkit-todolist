const { createSlice } = require('@reduxjs/toolkit');

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: filters,
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
