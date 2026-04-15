function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  // Simple login check
  if (user === "admin" && pass === "1234") {

    // Save login status
    localStorage.setItem("isLoggedIn", "true");

    // Redirect to dashboard page
    window.location.href = "dashboard.html";

  } else {
    document.getElementById("error").innerText = "Invalid Username or Password";
  }
}

// ================= LOGOUT FUNCTION =================
function logout() {
  // Remove login status
  localStorage.removeItem("isLoggedIn");

  // Redirect to login page
  window.location.href = "index.html";
}

// ================= PAGE SECURITY =================
window.onload = function () {
  let isLoggedIn = localStorage.getItem("isLoggedIn");

  // Prevent direct dashboard access
  if (window.location.pathname.includes("dashboard.html") && isLoggedIn !== "true") {
    window.location.href = "index.html";
  }
};