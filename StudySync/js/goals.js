const goalInput = document.getElementById("goalInput");
const goalsList = document.getElementById("goalsList");
const addGoalBtn = document.querySelector(".goal-add-btn");

function addGoal() {
  let text = goalInput.value.trim();
  if (text === "") return;

  let div = document.createElement("div");
  div.className = "goal-item";

  div.innerHTML = `
    <span class="goal-text">${text}</span>
    <button class="delete-goal">Delete</button>
  `;

  div.querySelector(".delete-goal").onclick = () => div.remove();

  goalsList.appendChild(div);
  goalInput.value = "";
}

addGoalBtn.addEventListener("click", addGoal);

goalInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addGoal();
});
