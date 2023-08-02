document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login");
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;
      
      // Create an object to hold login data
      const loginData = {
        email: username,
        password: password,
        
      };
      // Send the login data to the server using Fetch API
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Server response:", data);
          console.log("data.userType:", data.userType);
          // Handle the server response here (e.g., redirect to dashboard)
          if (data.userType === 'student') {
            location.href="/student-dashboard"
          } else if (data.userType === 'faculty') {
            location.href="/faculty-dashboard"
          } else {
            location.href="/admin-dashboard"
          }
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
    });
});