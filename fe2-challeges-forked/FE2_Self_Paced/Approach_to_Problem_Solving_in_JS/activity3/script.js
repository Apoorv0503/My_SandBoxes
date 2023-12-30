const GITHUB_API = "https://api.github.com/users";

/**
 * Return an array of usernames fetched from the Github API
 * https://api.github.com/users
 */
async function getGithubUsernames() {
  let userData = await fetch(GITHUB_API);
  let readableData = await userData.json();
  for (let i = 0; i < readableData.length; i++) {
    displayValuesAsList(readableData[i].login);
  }
}

/**
 * Display the values passed as arguments as a list on the screen
 * @param {Array} values
 */
function displayValuesAsList(values) {
  let listOfUsers = document.getElementById("usernames-list");
  let user = document.createElement("li");
  user.textContent = values;
  listOfUsers.append(user);
  return listOfUsers;
}
getGithubUsernames();
