const users = [
  { id: 0, name: `Stewie`, age: 1, city: `Quahog` },
  { id: 1, name: `Brian`, age: 8, city: `Quahog` },
  { id: 2, name: `Peter`, age: 44, city: `Quahog` },
  { id: 3, name: `Lois`, age: 43, city: `Quahog` },
];

function getUser(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let foundUser = null;
      for (let user of users) {
        if (user.id === id) {
          foundUser = user;
          break;
        }
      }
      if (foundUser) {
        resolve(foundUser);
      } else {
        reject(new Error(`User not found :p`));
      }
    }, 1000);
  });
}

getUser(1)
  .then(function (user) {
    console.log(`User found: `, user);
  })
  .catch(function (error) {
    console.error(`Error: `, error.message);
  });
