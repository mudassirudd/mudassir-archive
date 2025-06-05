const todoList = [];

function addTodo() {
  const inputElement = document.querySelector(`.js-todo-input`);
  const name = inputElement.value;
  todoList.push(name);

  console.log(todoList);

  inputElement.value = ``;
}

const todoList2 = [];

// renderTodoList();

function renderTodoList() {
  let todoListHTML = ``;

  for (let i = 0; i < todoList2.length; i++) {
    const todo = todoList2[i];

    const html = `<p>${todo}</p>`;

    todoListHTML += html;
  }

  console.log(todoListHTML);
  document.querySelector(`.js-todolist-div`).innerHTML = todoListHTML;
}

function addtodo2() {
  const inputElement2 = document.querySelector(`.js-list2-input`);

  const name2 = inputElement2.value;

  todoList2.push(name2);
  console.log(todoList2);
  inputElement2.value = ``;
  renderTodoList();
}

const todoList3 = [];

function addtodo3() {
  const inputElement3 = document.querySelector(`.js-list3-input`);

  const inputElement3Date = document.querySelector(`.js-list3-date-input`);

  const date3 = inputElement3Date.value;

  const name3 = inputElement3.value;

  todoList3.push({ name: name3, dueDate: date3 });

  inputElement3.value = ``;

  renderTodoList3();
}

function renderTodoList3() {
  let todoListHTML = ``;

  for (let i = 0; i < todoList3.length; i++) {
    const todoObject = todoList3[i];
    const name3 = todoObject.name;
    const date3 = todoObject.dueDate;

    const html = `
    <div>${name3}</div>

    <div> ${date3}</div>

    <button onclick="todoList3.splice(${i},1);
    renderTodoList3()">
    Delete</button>
    
    `;

    todoListHTML += html;
  }

  // console.log(todoListHTML);
  document.querySelector(`.js-todolist-div3`).innerHTML = todoListHTML;
}
