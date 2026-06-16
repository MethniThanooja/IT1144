// Dashboard stats
let tasksCompleted = 0;
let goalsAchieved = 0;
let focusMinutes = 0;

const tasksCompletedEl = document.getElementById("tasksCompleted");
const goalsAchievedEl = document.getElementById("goalsAchieved");
const focusMinutesEl = document.getElementById("focusMinutes");
const activityList = document.getElementById("activityList");

// Update stats
function updateDashboard() {
  tasksCompletedEl.textContent = tasksCompleted;
  goalsAchievedEl.textContent = goalsAchieved;
  focusMinutesEl.textContent = focusMinutes;
}

// Add activity
function addActivity(text) {
  const li = document.createElement("li");
  li.textContent = text;
  activityList.prepend(li);
}

// Example usage (you can connect these to other pages)
tasksCompleted++;
goalsAchieved++;
focusMinutes += 25;

addActivity("Completed a task");
addActivity("Finished a 25-minute focus session");
addActivity("Achieved a goal");

updateDashboard();

