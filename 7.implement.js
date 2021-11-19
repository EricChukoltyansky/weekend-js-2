// filter

const people = [
  { name: "Amy", gender: "female", age: "28" },
  { name: "Victor", gender: "male", age: null },
  { name: "David", gender: "male", age: 28 },
  { name: "Simon", gender: "male", age: undefined },
  { name: "Anna", gender: "female", age: 21 },
  { name: "Jane", gender: "female", age: NaN },
];

const filteredPeople = people.filter(
  (person) =>
    person.age !== undefined &&
    typeof person.age === "number" &&
    !isNaN(person.age)
);

console.log(filteredPeople);

// forEach

const colors = ["blue", "green", "white"];

let iterate = (item, index, array) => {
  console.log(item);
  if (index === array.length - 1) {
    console.log("The last iteration");
  }
};

colors.forEach(iterate);

// map
const numArray = [5, 4, 7, 8, 19, 16, 13, 11, 10, "boy", "cool", "filter"];
const newArray = numArray
  .filter((element) => {
    return Number.isInteger(element);
  })
  .map((num) => {
    return num * 10;
  });
console.log(newArray);
