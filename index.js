function handleFormSubmit(event) {
  event.preventDefault();

  // Get user details from the form
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Create a user object
  const user = {
    username,
    email,
    phone,
  };

  // Get existing users from local storage or initialize an empty array
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Add the new user to the array
  users.push(user);

  // Update local storage with the updated users array
  localStorage.setItem("users", JSON.stringify(users));

  // Display users on the page
  displayUsers(users);

  // Clear the form fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

function displayUsers(users) {
  // Get the unordered list element
  const userList = document.getElementById("userList");

  // Clear the existing list items
  userList.innerHTML = "";

  // Iterate through the users and create list items to display on the page
  users.forEach((user) => {
    const listItem = document.createElement("li");

    // Display user details in list item
    listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;

    // Append the list item to the unordered list
    userList.appendChild(listItem);
  });
}

// Load existing users from local storage on page load
document.addEventListener("DOMContentLoaded", () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  displayUsers(users);
});
