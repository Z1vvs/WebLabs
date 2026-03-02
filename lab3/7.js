const users = [
  { id: 0, name: `Stewie`, age: 1, city: `Quahog` },
  { id: 1, name: `Brian`, age: 8, city: `Quahog` },
  { id: 2, name: `Peter`, age: 44, city: `Quahog` },
  { id: 3, name: `Lois`, age: 43, city: `Quahog` },
];

function loadUsers() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(users);
    }, 1500);
  });
}

async function showUsers() {
  console.log(`loading`);
  try {
    const data = await loadUsers();
    console.log(`Users loaded:`, data);
  } catch (error) {
    console.error(`Failed to load users:`, error);
  } finally {
    console.log(`loading finished`);
  }
}

showUsers();
