const signUpFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    if (username && password) {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      
      // This isn't taking me to the homepage.
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to create account");
      }
    }
  };
  
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signUpFormHandler);