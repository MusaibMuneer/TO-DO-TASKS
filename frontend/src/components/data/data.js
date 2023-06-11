const todoList = [
    { id: 1, name: "Watering plants" },
    { id: 2, name: "Shopping for groceries" },
    { id: 3, name: "Walking the dog" },
    { id: 4, name: "Doing laundry" },
    { id: 5, name: "Cleaning the house" }
  ];
  localStorage.setItem("work", JSON.stringify(todoList));