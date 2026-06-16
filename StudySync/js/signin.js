const submitBtn = document.getElementById("submitBtn");
const userData = document.getElementById("userData");

submitBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please fill in both fields");
    return;
  }

  // Popup message
  alert("Sign in successful!");

  // Display user data
  userData.style.display = "block";
  userData.innerHTML = `
    <h3>User Details</h3>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Password:</strong> ${password}</p>
  `;
});
