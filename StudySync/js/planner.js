const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.querySelector(".add-btn");

function addTask() {
  let task = taskInput.value;
  if (task.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => li.remove();
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

// click on button
addBtn.addEventListener("click", addTask);

// press Enter in input
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
