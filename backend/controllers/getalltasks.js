const mongoose = require("mongoose");
const tasks = require("../models/tasks");

const addtask = (req, res) => {
  tasks
    .create({ name: `${req.body.name}` })
    .then(() => {
      console.log("task added");
      res.status(200).send("task added successfully");
      return;
    })
    .catch(() => {
      console.log("error creating task");
      return;
    });
};

const showalltasks = (req, res) => {
  tasks
    .find({})
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "An error occurred while fetching tasks." });
    });
};

const deletetask = (req, res) => {
  const taskname = req.params.name;
  tasks
    .findOneAndDelete({ name: taskname })
    .then((result) => {
      if (result.deletedCount === 0) {
        // No profiles with the specified name found
        return res
          .status(404)
          .json({ error: "No tasks found with the specified name." });
      }

      res.status(200).json({ message: "tasks deleted successfully." });
    })
    .catch((err) => {
      // Handle any errors that occur during the database operation
      res
        .status(500)
        .json({ error: "An error occurred while deleting the tasks." });
    });
};

const updatetask = (req, res) => {
  const taskname = req.params.name;
  const newtask = req.body.name;
  tasks
    .findOneAndUpdate({ name: taskname }, { name: newtask }) // Updated to include the new task name in the update query
    .then((result) => {
      if (result) {
        res.status(200).json({ message: "Task updated successfully" });
      } else {
        res.status(404).json({ message: "Couldn't find such task" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "An error occurred while updating the task." });
    });
};

module.exports = { addtask, showalltasks, deletetask, updatetask };
