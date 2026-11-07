// Select elements using DOM methods
const message = document.getElementById("message");
const changeMessageBtn = document.getElementById("changeMessageBtn");
const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");

// Change the paragraph text
changeMessageBtn.addEventListener("click", function() {
    message.textContent = "Hello! Welcome to my webpage.";
});

// Change the page background color
const colors = ["lightblue", "lightgreen", "lightyellow", "lavender", "mistyrose", "white"];
let colorIndex = 0;

changeBackgroundBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});