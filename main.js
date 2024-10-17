let users = [];
const api = "https://randomuser.me/api";
results = 100;

fetch(`${api}?results=${results}`)
  .then((res) => res.json())
  .then((data) => {
    users = data.results;
    console.log(users);
    displayUsers(users);
  });

function displayUsers(users) {
  const usersContainer = document.getElementById("profil-container");
  usersContainer.innerHTML = "";

  users.map((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("gallery-item");

    userCard.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <p>${user.name.first} ${user.name.last}</p>
    <p>${user.email}</p>
    <p>${user.location.city}, ${user.location.state}</p>
    </div>
    `;

    usersContainer.appendChild(userCard);
  });
}

function filterUsers(searchTerm) {
  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });
  displayUsers(filteredUsers);
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  filterUsers(searchTerm);
});
