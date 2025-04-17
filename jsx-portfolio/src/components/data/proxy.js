const target = { name: "Alice", lastName: "Smith" };


const proxy = new Proxy(target, {

  get: (obj, prop) => {
    console.log(`${prop}`);
    return obj[prop];
  }

});

console.log(proxy); // Logs "Getting name" then "Alice"
