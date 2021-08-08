const users = [];

//addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
  //Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();
  //Validate the data
  if (!username || !room) {
    return {
      error: "Username and room are required!",
    };
  }
  //Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });
  //Validate username
  if (existingUser) {
    return {
      error: "Choose a different username!",
    };
  }
  //Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1);
  }
};

const getUser = (id) => {
  return users.find((user) => {
    return user.id === id;
  });
};

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => {
    return user.room === room;
  });
};

addUser({
  id: 22,
  username: "Andriana",
  room: "NYC",
});

addUser({
  id: 42,
  username: "Ashot",
  room: "Boston",
});

addUser({
  id: 33,
  username: "Svitlana",
  room: "NYC",
});

const user = getUser(33);
console.log(user);

const userList = getUsersInRoom("NYC");
console.log(userList);

console.log(users);
removeUser(22);
console.log(users);
removeUser(33);
console.log(users);
// console.log(userList);

module.exports = {
  addUser,
  removeUser,
  getUsersInRoom,
  getUser,
};
