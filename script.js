document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
  alert("Right-click detected!");
});
// Show Message button function
function showMessage() {
    alert("This is a test message for Selenium practice!");
}

// Right-click context menu
const box = document.getElementById("rightClickBox");

box.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // stop browser default menu
    alert("Right-click action detected!");
});

