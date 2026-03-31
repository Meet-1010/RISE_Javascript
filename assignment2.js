//  Student Report System

let obj = {
    first : {
        marks : [87, 56, 78, 90]
    },
    second : {
        marks : [88, 34, 23, 99]
    },
    third : {
        marks : [67, 45, 56, 87]
    }
}

obj.first.avg = (obj.first.marks.reduce((num, res) => num + res, 0) / obj.first.marks.length);
obj.second.avg = (obj.second.marks.reduce((num, res) => num + res, 0) / obj.second.marks.length);
obj.third.avg = (obj.third.marks.reduce((num, res) => num + res, 0) / obj.third.marks.length);

function result(a){
    let avg = a.avg;
    if(avg >= 75){
        return "Distinction"
    }else if(avg >= 50){
        return "Pass"
    }else{
        return "Fail"
    }
}

obj.first.res = result(obj.first);
obj.second.res = result(obj.second);
obj.third.res = result(obj.third);

console.log(obj);

//  Shopping Cart Analyzer

function calculateBill(...items) {
    let totalAmount = 0;
    let totalQuantity = 0;

    items.forEach(item => {
        totalAmount += item.price * item.quantity;
        totalQuantity += item.quantity;
    });

    return {
        totalAmount,
        totalQuantity
    };
}

const result = calculateBill(
    { name: "Apple", price: 10, quantity: 2 },
    { name: "Banana", price: 5, quantity: 5 },
    { name: "Orange", price: 8, quantity: 3 }
);

console.log(result);


// User Profile Updater

function updatePerson(person, newCity, profession) {
    const updatedPerson = {
        ...person,           
        city: newCity,       
        profession: profession 
    };

    return updatedPerson;
}

const originalPerson = {
    name: "Rahul",
    age: 25,
    city: "Delhi"
};

const newPerson = updatePerson(originalPerson, "Mumbai", "Engineer");

console.log("Original:", originalPerson);
console.log("Updated:", newPerson);

// Product Filter & Transform

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Phone", price: 20000 },
    { name: "Keyboard", price: 1500 }
];

const result = products
    .filter(product => product.price > 1000)
    .map(product => ({
        ...product,
        discountedPrice: product.price * 0.9
    }));

console.log(result);

// Dynamic Number Processor

const numbers = [10, 15, 20, 25, 30, 35];

const evenNumbers = numbers.filter(num => num % 2 === 0);
const oddNumbers = numbers.filter(num => num % 2 !== 0);

const sumEven = evenNumbers.reduce((sum, num) => sum + num, 0);
const sumOdd = oddNumbers.reduce((sum, num) => sum + num, 0);

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);
console.log("Sum of Even Numbers:", sumEven);
console.log("Sum of Odd Numbers:", sumOdd);