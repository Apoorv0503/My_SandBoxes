function getUsers() {
  // Return list of usernames
  // 1. Get json data
  // 2. Get array of just usernames
  const url = "https://api.github.com/users";

  let usernamesPromise = fetch(url)
    .then((respObj) => respObj.json())
    .then((jsonObj) => {
      // console.log(jsonObj);
      // let usernamesArray = jsonObj.map((userData) => userData.login);

      console.log("is array 1st " + Array.isArray(jsonObj));
      let usernamesArray = [];
      for (let i = 0; i < jsonObj.length; i++) {
        usernamesArray.push(jsonObj[i].login);
      }
      // console.log(usernamesArray);

      return usernamesArray;
    })
    .catch((err) => console.log(err));

  console.log("is array 2nd " + Array.isArray(usernamesPromise));
  return usernamesPromise;
  //actually isme usernameArray hai andr.
}

function createListItem(text) {
  // 1. Create li element
  let liElement = document.createElement("li");

  // 2. Update text
  liElement.textContent = text;

  return liElement;
}

function addUsersToDOM() {
  // 1. Fetch usernames array  and this usernamePromise is an promise obj
  const usernamesPromise = getUsers();
  // console.log("is array 3rd " + Array.isArray(usernamesPromise));
  console.log("check " + usernamesPromise);
  // console.log(usernames);
  // 2. Get existing ul DOM element
  const ulElement = document.getElementById("list");

  // console.log("is array 3rd " + Array.isArray(usernamesPromise));

  // 3. For each username, add a list element as child of the ul
  usernamesPromise.then((usernames) => {
    usernames.forEach((username) => {
      let liElement = createListItem(username);
      ulElement.append(liElement);
    });
  });
}

// getUsers();
// console.log(createListItem("My list text"));
addUsersToDOM();
