// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
// Ketika hamburger menu di klik
hamburgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});
// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
function toggleSearch() {
  const searchBox = document.getElementById("searchBox");
  if (searchBox.style.display === "none") {
    searchBox.style.display = "block";
  } else {
    searchBox.style.display = "none";
  }
}
function performSearch() {
  const query = document.getElementById("searchInput").value;
  // Replace this alert with actual search functionality
  alert("Searching for: " + query);
  // You can redirect or handle the search query here.
}
