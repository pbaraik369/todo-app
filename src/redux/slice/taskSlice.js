import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [], // Initial state with an empty array for tasks
};

// Create a slice for tasks with reducers
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Reducer to add a new task
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    // Reducer to delete a task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    // Reducer to toggle the completion status of a task
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;
