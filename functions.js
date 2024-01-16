const users = [
  {
    userId: 1234,
    firstName: "Ashlyn",
    lastName: "Knox",
    status: true,
  },
  {
    userId: 1235,
    firstName: "Copernicus",
    lastName: "Sees the stars",
    status: false,
  },
  {
    userId: 1236,
    firstName: "Sally",
    lastName: "Fields",
    status: true,
  },
];

// function declaration
function printUser(user) {
  console.log(user);
}

function getFullName(user) {
  return user.firstName + " " + user.lastName;
}

function isUserStatusActive(user) {
  if (user.status === true) {
    return true;
  } else {
    return false;
  }
}

// function invocation

let activeUser = isUserStatusActive(users[0]);

console.log(activeUser);

// invoke and assign the result to a variable
const userTwoName = getFullName(users[2]);
// log the variable
console.log(userTwoName);
