let changeCount = (value) => {
  let num = document.querySelector(".count").textContent;
  let result = +num + value;
  if (num == 0 && value == -1) {
    result = 0;
  }
  console.log(result);
  document.querySelector(".count").textContent = result;
};
