import { createSlice } from '@reduxjs/toolkit';

interface State {
  user: any;
}

const initialState: State = {
  user: null,
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userReducer.actions;

export default userReducer.reducer;
