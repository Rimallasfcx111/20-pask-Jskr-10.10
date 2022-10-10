
let user = {
    name: 'Bobi',
    age: 25,
    town: 'Vilnius',
    isDriver: true,
};

console.log('user.name ===',user.name);
console.log("user['name']", user['name']);

user.age = 26;

console.log(user);
