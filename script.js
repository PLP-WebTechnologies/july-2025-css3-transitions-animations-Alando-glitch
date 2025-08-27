/* ------------------ Part 2: JavaScript Functions ------------------ */

// Example function with parameters & return value
function calculateArea(width, height) {
  let area = width * height; // local variable
  document.getElementById("area-result").textContent =
    `Area of rectangle: ${area}`;
  return area; // returning value
}

// Example showing scope
let globalMessage = "I am a global variable!";

function showScope() {
  let localMessage = "I am a local variable!";
  console.log(globalMessage); // Accessible
  console.log(localMessage);  // Accessible only inside function
}
// Uncomment to test
// showScope();

/* ------------------ Part 3: Combining CSS + JS ------------------ */

// Animate box by toggling class
function animateBox() {
  const box = document.getElementById("animate-target");
  box.classList.toggle("animate");
}

// Modal toggle with animations
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("show");
}
