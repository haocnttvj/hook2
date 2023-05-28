import { createSlice } from "@reduxjs/toolkit";

export const fetchTodoListAction = createAsyncThunk(
  "todo/fetchTodoListAction",
  () => {
    console.log(1111);
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {},
});
export default todoSlice.reducer;
