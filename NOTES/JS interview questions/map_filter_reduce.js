const users = [
    {
        id: 1,
        name: "john",
        isActive: false,
        age: 40
    },
    {
        id: 2,
        name: "wick",
        isActive: false,
        age: 70
    },
    {
        id: 3,
        name: "ram Ji",
        isActive: true,
        age: 7000
    },
    {
        id: 4,
        name: "Hanuman Ji",
        isActive: true,
        age: 1000000
    },
];

// Method-2
const names = users
    .filter(user => user.isActive)
    .sort((user1, user2) => user1.age - user2.age) // Sort the user objects by age
    .map(user => user.name); // Then map to names

console.log("names=" + names);
