import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';

export interface IRoosterInitialState {
    Rooster: string;
}

export const initialState: IRoosterInitialState = {
  Rooster : ""

};

type State = typeof initialState;
export type RoosterState = {rooster: State};
export const roosterSelectorngSelector = (state: RoosterState) => state.rooster.Rooster;

const RoosterSlice: Slice = createSlice({
  name: 'rooster',
  initialState,
  reducers: {
      fetchRoosterSucceeded: (
          state: State,
          action: PayloadAction<string>,
        ) => {
          state.Rooster = action.payload;
        },
  },
});

export const {
  fetchRoosterSucceeded
} = RoosterSlice.actions;

export default RoosterSlice.reducer;
