let todos = [
  { id: Date.now(), text: "text 1" },
  { id: Date.now(), text: "text 2" },
  { id: Date.now(), text: "text 3" },
];

// Задание 1.
// Сделать функцию updateTodoList() которая будет обновалять
// наш список при каждом изменении.
// Взять UL и добавить в него li, span, и 2 копнки (edit, delete).

// Для Li дать стиль "list-group-item d-flex justify-content-between align-items-center"
// Для Button delete дать стиль "btn btn-danger btn-sm ml-2"
// Для Button edit дать стиль "btn btn-primary btn-sm ml-2"

// Добавить в LI > span, 2 кнопики
// Добавить в UL > LI

// "btn", "btn-warning", "btn-sm", "ml-2"
// "btn", "btn-warning", "btn-sm", "ml-2"

// const todoList = document.getElementById("todoList");
// const addTodoButton = document.getElementById("addTodo");
// const newTodoInput = document.getElementById("newTodo");

// function updateTodoList() {
//   todoList.innerHTML = "";

//   tasks.forEach((text, index) => {
//     const li = document.createElement("li");
//     li.classList.add(
//       "list-group-item",
//       "d-flex",
//       "justify-content-between",
//       "align-items-center"
//     );

//     const spanTask = document.createElement("span");
//     spanTask.textContent = text;

//     const editButton = document.createElement("button");
//     editButton.textContent = "Edit";
//     editButton.classList.add("btn", "btn-warning", "btn-sm", "ml-2");
//     editButton.addEventListener("click", () => editTask(index));

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2");
//     deleteButton.addEventListener("click", () => deleteTask(index));

//     li.appendChild(spanTask);
//     li.appendChild(editButton);
//     li.appendChild(deleteButton);

//     todoList.appendChild(li);
//   });
// }

// let tasks = ["An item", "A second item", "A thrid item"];

// addTodoButton.addEventListener("click", () => {
//   const newTask = newTodoInput.value.trim();
//   if (newTask) {
//     tasks.push(newTask);
//     newTodoInput.value = "";
//     updateTodoList();
//   }
// });

// function editTask(index) {
//   const newTask = prompt("Edit task:", tasks[index]);
//   if (newTask !== null && newTask.trim() !== "") {
//     tasks[index] = newTask;
//     updateTodoList();
//   }
// }

// function deleteTask(index) {
//   tasks.splice(index, 1);
//   updateTodoList();
// }

// updateTodoList();
