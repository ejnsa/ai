// 🌗 Selecting the button and the body for theme changing
let button = document.querySelector("#changeMode");
let body = document.querySelector("body");

// 🌞 Step 1: Check if there is any saved mode in localStorage
let mode = localStorage.getItem("mode") || "light"; 
// If nothing saved before, default is "light"

// 🌙 Step 2: Apply the saved mode when the page loads
if (mode === "dark") {
  body.classList.add("dark");
  body.classList.remove("light");
  button.innerText = "Light mode 🌄";
} else {
  body.classList.add("light");
  body.classList.remove("dark");
  button.innerText = "Dark mode 🌜";
}

// 🌈 Step 3: Add click event listener for changing mode
button.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    button.innerText = "Light mode 🌄";

    // 💾 Save current mode to localStorage
    localStorage.setItem("mode", "dark");
  } else {
    mode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    button.innerText = "Dark mode 🌜";

    // 💾 Save current mode to localStorage
    localStorage.setItem("mode", "light");
  }
});
