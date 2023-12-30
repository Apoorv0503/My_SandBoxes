const greetRohan = new Promise((resolve, reject) => {
  try {
    const greeting = "Hello Rohan!";
    resolve(greeting);
  } catch {
    reject(new Error("Cannot Greet!"));
  }
});
const greetShyam = new Promise((resolve, reject) => {
  try {
    const greeting = "Hello Shyam!";
    resolve(greeting);
  } catch {
    reject(new Error("Cannot Greet!"));
  }
});

greetRohan
  .then(() => {
    console.log("Greeted Rohan");
    return greetShyam;
  })
  .then(() => {
    console.log("Greeted Shyam");
  })
  .catch((e) => {
    console.log(e);
  });
