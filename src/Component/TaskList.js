import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/slice/taskSlice";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { Delete, Done } from "@mui/icons-material";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // Get tasks from Redux state
  console.log("tasks", tasks);
  const dispatch = useDispatch();

  // Function to handle deleting a task
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id)); // Dispatch action to delete task
  };

  // Function to handle toggling the completion status of a task
  const handleToggleTask = (id) => {
    dispatch(toggleTask(id)); // Dispatch action to toggle task status
  };

  return (
    <List className="taskList_container">
      {/* Iterate over tasks and display each task */}
      {tasks.length > 0 &&
        tasks.map((task) => (
          <ListItem
            className="taskList_item"
            key={task.id}
            button
            onClick={() => handleToggleTask(task.id)}
          >
            {/* Display task text with appropriate styling based on completion status */}
            <ListItemText
              primary={task.text}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            />
            <ListItemSecondaryAction>
              {/* Button to delete a task */}
              <IconButton edge="end" onClick={() => handleDeleteTask(task.id)}>
                <Delete className="taskList_delete" />
              </IconButton>
              {/* Button to toggle task completion status */}
              <IconButton edge="end" onClick={() => handleToggleTask(task.id)}>
                <Done className="taskList_done" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  );
};

export default TaskList;
