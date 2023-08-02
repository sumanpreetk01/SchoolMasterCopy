document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup");
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // console.log(event);
      const username = document.getElementById("signupUsername").value;
      // console.log(username);
      const password = document.getElementById("signupPassword").value;
      // console.log(password);
      const userType = document.getElementById("userTypeDropDown").value;
      // console.log(userType);
      const name = document.getElementById("name").value;

      // Create an object to hold signup data
   
      const signupData = {
        name: name,
        email:username,
        password: password,
        userType: userType,
      };
      console.log('Checkpoint', signupData);
      // Send the signup data to the server using Fetch API
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Server response:", data);
          if (userType === 'student') {
            location.href="/student-dashboard"
          } else if (userType === 'faculty') {
            location.href="/faculty-dashboard"
          } else {
            location.href="/admin-dashboard"
          }
        })
        .catch((error) => {
          console.error("Error signing up:", error);
        });
    });
  });
  