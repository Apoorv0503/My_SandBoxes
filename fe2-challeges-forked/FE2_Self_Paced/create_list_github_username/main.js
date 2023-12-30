function addUsersToDOM() {
  // getUser
  // createListItem(text)
  let data = getUser();
  data
    .then((res) => createListItem(res))
    .catch((e) => {
      throw new Error(e);
    });
}

function createListItem(text) {
  console.log(text);
  let container = document.getElementById("root");
  let list = document.createElement("ul");
  text.forEach((listEle) => {
    let li = document.createElement("li");
    li.textContent = listEle.login;
    list.append(li);
  });
  container.append(list);
}

function getUser() {
  return fetch("https://api.github.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      throw new Error(error);
    });
}

addUsersToDOM();
