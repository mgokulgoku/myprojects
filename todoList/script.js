// Todo List App

// Store todos
let todos = [];

// Add new todo
function addTodo() {
  const input = document.getElementById("todoInput");
  const todoText = input.value.trim();

  if (todoText === "") {
    alert("Please enter a todo!");
    return;
  }
  
  const newTodo = {
    text: todoText,
    completed: false,
  };

  todos.push(newTodo);
  input.value = "";
  renderTodos();
}

// Show all todos
function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  
  if (todos.length === 0) {
    todoList.innerHTML =
      '<li class="empty-state">No todos yet! Add one above.</li>';
    updateStats();
    return;
  }
  
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";
    todoItem.innerHTML = `
                    <span class="todo-text ${
                      todo.completed ? "completed" : ""
                    }" 
                          onclick="toggleTodo(${index})">
                        ${todo.text}
                    </span>
                    <button class="delete-btn" onclick="deleteTodo(${index})">
                        Delete
                    </button>
                `;
    todoList.appendChild(todoItem);
  });
  updateStats();
}

// Mark complete/incomplete
function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

// Remove todo
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// Update counter
function updateStats() {
  const completed = todos.filter((todo) => todo.completed).length;
  const total = todos.length;
  const statsElement = document.getElementById("stats");
  
  if (total > 0) {
    statsElement.textContent = `${completed} of ${total} completed`;
  } else {
    statsElement.textContent = "";
  }
}

// Start app
renderTodos();
