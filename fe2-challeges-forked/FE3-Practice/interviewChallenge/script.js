class GitHub {
  constructor() {
    this.apiUrl = "https://api.github.com/users/";
    this.cardContainer = document.getElementById("githubCard");
  }

  getUserDetails = async (username) => {
    try {
      const response = await fetch(this.apiUrl + username);
      const userData = await response.json();
      if (userData.name === undefined) {
        alert("Please enter a valid GitHub username.");
        return;
      }
      this.createUserCard(userData);
    } catch (error) {
      console.error("Error fetching GitHub user details:", error);
    }
  };

  createUserCard = (userData) => {
    const cardContent = `
            <img src="${userData.avatar_url}" alt="${userData.name}'s Avatar">
            <h2>${userData.name}</h2>
            <p>${userData.bio}</p>
            <p>Followers: ${userData.followers} | Following: ${
              userData.following
            }</p>
            <p>Repos: ${userData.public_repos}</p>
            ${
              userData.twitter_username
                ? `<p>Twitter: <a href="https://twitter.com/${userData.twitter_username}" target="_blank">${userData.twitter_username}</a></p>`
                : ""
            }
            ${userData.location ? `<p>Location: ${userData.location}</p>` : ""}
        `;

    this.cardContainer.innerHTML = cardContent;
  };
}

function updateGitHubCard() {
  const inputUsername = document.getElementById("username").value;
  if (inputUsername.trim() !== "") {
    const gitHub = new GitHub();
    gitHub.getUserDetails(inputUsername);
  } else {
    alert("Please enter a valid GitHub username.");
  }
}
