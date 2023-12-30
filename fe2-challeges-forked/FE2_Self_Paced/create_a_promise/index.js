let createPromise = new Promise(function (resolve, reject) {
  try {
    let food = "Samosa";
    resolve(food);
  } catch (error) {
    reject(new Error(error));
  }
});

createPromise
  .then((res) => console.log("I ate " + res))
  .catch((e) => console.log("Sorry", e))
  .finally(() => console.log("task completed"));
