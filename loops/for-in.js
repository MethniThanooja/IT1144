let student = {
    name: "John",
    age: 20,
    city: "Colombo"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}