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

async function loadUsers(ids) {
  const promises = ids.map(function (id) {
    return getUser(id);
  });
  const results = await Promise.allSettled(promises);

  const successfulResults = results.filter(function (result) {
    return result.status === `fulfilled`;
  });

  return successfulResults.map(function (result) {
    return result.value;
  });
}

loadUsers([0, 1, 20, 3]).then(function (foundUsers) {
  console.log(`List of found users: `, foundUsers);
});
