let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

console.log(shoppingList[0]);

// Add an item to the end of the array push() method.
shoppingList.push('Carrots');
console.log(shoppingList);

shoppingList[4].splice(1, 2, 'Cucumbers','Bell Peppers');
console.log(shoppingList);


let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

console.log(student.name);

student.phone = "123-456-7890";
console.log(student);

delete student.grade;
console.log(student);

student.age = 21;
console.log(student);



let n = 10;

if(n>0){
    console.log("Positive");    
}
else if(n<0){
    console.log("Negative");
}
else{
    console.log("Zero");
}


let score = 65;

if(score>=90 && score<=100){
    console.log("A");
} else if(score>=80 && score<=89){
    console.log("B");
} else if(score>=70 && score<=79){
    console.log("C");
} else if(score>=60 && score<=69){
    console.log("D");
}
else{
    console.log("F");
}


// truthy values

let str = "";
if(str == ''){
    console.log("falsy");
}
else{
    console.log("truthy");
}
