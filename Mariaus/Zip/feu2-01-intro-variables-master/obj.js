// sukurti user objekta

let user = {
  // key: value,
  name: 'Bob',
  age: 25,
  town: 'Kaunas',
  isDriver: true,
};

// 'Bob'
console.log('user.name ===', user.name);
console.log("user['name']", user['name']);

user.age = 26;

console.log(user);
