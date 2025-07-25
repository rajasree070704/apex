// Show alert
function showAlert() {
  alert("Complaint Submitted! Thank you.");
}

// Wait for DOM
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("complaintForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Input values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Clear errors
      document.getElementById("nameError").innerText = "";
      document.getElementById("emailError").innerText = "";
      document.getElementById("messageError").innerText = "";

      let isValid = true;

      // Name check
      if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
      }

      // Email check
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
      } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email (e.g. example@gmail.com).";
        isValid = false;
      }

      // Message check
      if (message === "") {
        document.getElementById("messageError").innerText = "Description is required.";
        isValid = false;
      }

      // If all valid
      if (isValid) {
        showAlert();
        form.reset();
        window.location.href = "index.html"; // Navigate after submission
      }
    });
  }
});
