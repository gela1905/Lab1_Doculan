const messages = [
  "Go Cavitenio! 🌱",
  "Truth, Excellence, and Service! 🎓",
  "Shaping leaders since day one. 🏫",
  "Proud to be part of CvSU! 💚"
];

function showMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("dynamicMessage").innerText = messages[randomIndex];
}

// Optional: greet on page load
window.onload = function () {
  console.log("Welcome to the CvSU page, Angelica!");
};