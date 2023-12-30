const GITHUB_API = "https://api.github.com/users";

/**
 * Return an array of usernames fetched from the Github API
 * https://api.github.com/users
 */
async function getGithubUsernames() {
  try {
    let res = await fetch(GITHUB_API);
    let data = await res.json();
    console.log(data);
    displayValuesAsList(data);
  } catch (error) {
    return null;
  }
}

/*
 * Display the values passed as arguments as a list on the screen
 * @param {Array} values
 */
function displayValuesAsList(values) {
  let nameList = document.getElementById("usernames-list");
  values.map((ele) => {
    let name = document.createElement("li");
    name.textContent = ele.login;
    nameList.append(name);
  });
}

getGithubUsernames();
