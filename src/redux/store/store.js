import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../slice/taskSlice";

// Function to save Redux state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState); // Save serialized state to local storage
  } catch (error) {
    console.log(error);
  }
};

// Function to load Redux state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state"); // Load state from local storage
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const preloadedState = loadState(); // Load preloaded state from local storage

// Create Redux store with taskReducer and preloaded state
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState,
});

// Subscribe to Redux store changes and save state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
