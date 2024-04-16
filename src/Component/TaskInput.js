import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../redux/slice/taskSlice";
import { TextField, Button } from "@mui/material";

const TaskInput = () => {
  const [text, setText] = useState(""); // State to hold the input text
  const dispatch = useDispatch();

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (text.trim()) {
      // Check if input is not empty
      dispatch(addTask({ id: uuidv4(), text, completed: false })); // Dispatch action to add task
      setText(""); // Clear input field
    }
  };

  return (
    <div className="taskInput_container">
      {/* Input field for adding a new task */}
      <TextField
        className="taskInput_input"
        label="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddTask(); // Add task on Enter key press
        }}
      />

      {/* Button to add a new task */}
      <Button
        className="taskInput_btn"
        variant="contained"
        color="primary"
        onClick={handleAddTask}
      >
        Add
      </Button>
    </div>
  );
};

export default TaskInput;
