// --- Select Elements ---
const darkModeToggle = document.getElementById("darkModeToggle");
const fontSizeSelect = document.getElementById("fontSizeSelect");
const resetBtn = document.querySelector(".reset-btn");


// --- DARK MODE ---
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    }
});


// --- FONT SIZE ---
fontSizeSelect.addEventListener("change", () => {
    const size = fontSizeSelect.value;

    if (size === "small") {
        document.body.style.fontSize = "14px";
    } else if (size === "medium") {
        document.body.style.fontSize = "16px";
    } else if (size === "large") {
        document.body.style.fontSize = "18px";
    }
});

// --- RESET ALL SETTINGS ---
resetBtn.addEventListener("click", () => {

    // Reset Dark Mode
    document.body.classList.remove("dark-mode");
    darkModeToggle.checked = false;
	localStorage.setItem("darkMode", "disabled");

	

    // Reset Font Size
    document.body.style.fontSize = "";
    fontSizeSelect.value = "medium";
});
