const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "Switch to Light Mode";
    } else {
        toggleBtn.textContent = "Toggle Dark Mode";
    }
});