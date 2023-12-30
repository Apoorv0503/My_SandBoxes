async function getUsers() {
  // Return list of usernames
  // 1. Get json data
  // 2. Get array of just usernames
  const url = "https://api.github.com/users";

  let respObj = await fetch(url);
  let jsonObj = await respObj.json(); //resObj.json() again return an promise obj
  let usernamesArray = jsonObj.map((userData) => userData.login);

  return usernamesArray;
}

function createListItem(text) {
  // 1. Create li element
  let liElement = document.createElement("li");

  // 2. Update text
  liElement.textContent = text;

  return liElement;
}

async function addUsersToDOM() {
  // 1. Fetch usernames array
  const usernames = await getUsers();
  // console.log(usernames);
  // 2. Get existing ul DOM element
  const ulElement = document.getElementById("list");

  // 3. For each username, add a list element as child of the ul
  console.log("checked 1st " + Array.isArray(usernames));

  usernames.forEach((username) => {
    let liElement = createListItem(username);
    ulElement.append(liElement);
  });

  //unable to understand why did'nt resolved the promise obj
  //using .then() which is returned by awit.getUsers();

  // usernames.then((names) => {
  //   names.forEach((username) => {
  //     let liElement = createListItem(username);
  //     ulElement.append(liElement);
  //   });
  // });
}

// getUsers();
// console.log(createListItem("My list text"));
addUsersToDOM();
