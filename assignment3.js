// Employee Salary Processor

const employees = [
    { name: "Amit", salary: 35000 },
    { name: "Rahul", salary: 53000 },
    { name: "Neha", salary: 87000 },
    { name: "Priya", salary: 48000 }
];

const result = employees
    .filter(emp => emp.salary > 40000)
    .map(emp => {
        const newSalary = emp.salary * 1.1;

        return {
            ...emp,
            salary: newSalary,
            level: newSalary >= 70000 ? "Senior" : "Mid"
        };
    });

console.log(result);

// Order Management System

const orders = [
    {
        id: 1,
        items: [
            { name: "Laptop", price: 50000, quantity: 1 },
            { name: "Mouse", price: 500, quantity: 2 }
        ]
    },
    {
        id: 2,
        items: [
            { name: "Phone", price: 20000, quantity: 1 },
            { name: "Charger", price: 1000, quantity: 3 }
        ]
    }
];

const result2 = orders.map(order => {
    const totalAmount = order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const totalQuantity = order.items.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const ids = order.id

    return {
        ids,
        totalAmount,
        totalQuantity
    };
});

console.log(result2);