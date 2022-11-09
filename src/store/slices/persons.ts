import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { PersonsType, PersonType } from "../../types/main";

const initialState: PersonsType = {
  persons: [],
};

const slice = createSlice({
  name: "pesonsInfo",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<PersonsType>) {
      state.persons = [...action.payload.persons];
    },
    setPersonStatus(state, action: PayloadAction<PersonType>) {
      const index = state.persons.findIndex((i) => i.id === action.payload.id);
      state.persons[index] = { ...action.payload };
    },
  },
});

export const personsSelector = (state: RootState) => ({
  persons: state.persons.persons,
});

export default slice.reducer;

export const { setUsers, setPersonStatus } = slice.actions;
