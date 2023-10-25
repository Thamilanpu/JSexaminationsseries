// q1
let x={}
console.log(x)

// q2
let person={
    name:"Thamilanpu",
    age:21,
    gender:"male"
    
}
console.log("Hello, my name is "+person.name);
console.log(person);

// q3
function greet(greetstudent) {
    return "Hello"+person.name+"welcome to the coding school"
}
console.log(greet("greetstudent"));

// q4
console.log("Name:", person.name);
console.log("Name:", person["name"]);
// q5
person.email="john@example.com"
console.log(person.email);

// q6
delete person.gender;
console.log(person);

//q7


//q8
let student={
    name:"Thamilanpu"
}
let courses ={
    course:"Web Development"
}
let studentcourse = Object.assign({}, student, courses);
console.log(studentcourse);
