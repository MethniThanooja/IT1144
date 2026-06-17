const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.querySelector(".add-btn");

function addTask() {
  let task = taskInput.value;   //get whatever user typed.
  if (task.trim() !== "") {		//prevent empty tasks
    let li = document.createElement("li");		//create new <li> element
    li.textContent = task;					//put the task text inside <li>
    li.onclick = () => li.remove();			//when user click the task  it will delete it self.
    taskList.appendChild(li);				//add new <li> to the <ul>
    taskInput.value = "";					//clears the input
  }
}

// click on button
addBtn.addEventListener("click", addTask);

// press Enter in input
taskInput.addEventListener("keypress", (e) => {  //e = event object, information about which key should press
  if (e.key === "Enter") {
    addTask();
  }
});
