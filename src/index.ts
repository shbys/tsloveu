import { JsonTodoCollection } from "./JsonTodoCollection";
import { TodoItem } from "./todoItem";

let todos = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Joe", true)
];

let collection = new JsonTodoCollection("Adam", todos);
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));

let itemCount = collection.getItemCount();
console.clear();
console.log(`${collection.userName}'s Todo List ([${itemCount.incomlete}] items to do, [${itemCount.total - itemCount.incomlete}] done)`);

// collection.removeComplete();
collection.getToDoItems(true).forEach(o => o.printDetails());
console.log('---------------------------------------------------------------');

// functions
function calculateTax(amount: number,
    format: boolean = false,
    discount: number = 0,
    ...extraFees: number[]
): string | number | null {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2 - discount
        + extraFees.reduce((total, val) => total + val, 0);
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

const taxNumber = calculateTax(100) as number;
const taxString = calculateTax(100, true) as string;
const taxBoolean = calculateTax(100, false) as any as boolean;
console.log(`TaxNumber = ${taxNumber} \t TaxString = ${taxString}`);
console.log(`string value= ${taxString.charAt(0)}`);
console.log(`Boolean Value = ${taxBoolean}`);
console.log('---------------------------------------------------------------');

const taxValue = calculateTax(0);
if (typeof taxValue === "number") {
    // here type of taxValue is number because of type guard
    console.log(`taxValue is Number Value: ${taxValue.toFixed(2)}`);
} else if (typeof taxValue === "string") {
    // here type of taxValue is string becase of type guard
    console.log(`taxValue is String Value: ${taxValue.charAt(0)}`)
} else {
    if (taxValue === null) {
        console.log("taxValue is null");
    } else {
        console.log(typeof taxValue);
        let value: never = taxValue;
        console.log(`Unexpected type for value: ${value}`);
    }
}
console.log('---------------------------------------------------------------');

switch (typeof taxValue) {
    case "number":
        // here type of taxValue is number because of type guard
        console.log(`taxValue is Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        // here type of taxValue is string because of type guard
        console.log(`taxValue is String Value: ${taxValue.charAt(0)}`);
        break;
    default:
        if (taxValue === null) {
            console.log("taxValue is null");
        } else {
            console.log(typeof taxValue);
            let value: never = taxValue;
            console.log(`Unexpected type for value: ${value}`);
        }
}
console.log('---------------------------------------------------------------');

//  tuples
const hat: [string, number] = ["hat", 100];
const gloves: [string, number] = ["Gloves", 75];
hat.forEach((o: string | number) => {
    if (typeof o === "string") {
        console.log(`String: ${o}`);
    } else {
        console.log(`Number: ${o.toFixed(2)}`);
    }
});
console.log('---------------------------------------------------------------');

let products: [string, number][] = [["Hat", 100], ["Gloves", 75]];
let tupleUnion: ([string, number] | boolean)[] = [true, false, hat, ...products];
let basicUnion: (string | number | boolean)[] = [true, false, 123, 3434, false, true];
tupleUnion.forEach(o => {
    if (o instanceof Array) {
        o.forEach(u => {
            if (typeof u === "string") {
                console.log(`String: ${u}`);
            } else {
                console.log(`Number: ${u.toFixed(2)}`);
            }
        });
    }
    else if (typeof o === "boolean") {
        console.log(`Boolean Value: ${o}`);
    }
});
console.log('---------------------------------------------------------------');

basicUnion.forEach(o => {
    if (typeof o === "string") {
        console.log(`String: ${o}`);
    } else if (typeof o === "number") {
        console.log(`Number: ${o.toFixed(2)}`);
    } else {
        console.log(`Boolean Value: ${o}`);
    }
});
console.log('---------------------------------------------------------------');

// Enums
enum Product { Hat, Gloves = 20, Umbrella = 300 }
const productsWithEnum: [Product, number][] = [[Product.Hat, 100], [Product.Gloves, 76], [Product.Umbrella, 95]];
productsWithEnum.forEach(o => console.log(`${Product[o[0]]} = ${o[1]}`));
productsWithEnum.forEach(o => {
    switch (o[0]) {
        case Product.Hat:
            console.log(`Hat = ${o[1]}`);
            break;
        case Product.Gloves:
            console.log(`Gloves = ${o[1]}`);
            break;
        case Product.Umbrella:
            console.log(`Umbrella = ${o[1]}`);
            break;
    }
});
[Product.Hat, Product.Gloves, Product.Umbrella].forEach(o =>
    console.log(`Product.${Product[o]} Index is ${o}, type = ${typeof o}`));
enum City {
    London = "London",
    Paris = "Paris",
    NY = "New York"
}
// here we cannot use City[o] as string cannot be used to index type `City`
[City.London, City.Paris, City.NY].forEach((o: City | any) =>
    console.log(`City : ${o}, type = ${typeof o}`));
console.log('---------------------------------------------------------------');

// literal value types
let restrictedValue: 1 | 2 | 3 = 3;
console.log(`restrictedValue: ${restrictedValue}`)
function calculatedPrice(quantity: 1 | 2 | null, price: number): number {
    if (quantity === null) return 0;
    return quantity * price;
}
let total = calculatedPrice(null, 19.99);
console.log(`Price: ${total}`);
total = calculatedPrice(2, 19.99);
console.log(`Price: ${total}`);
function getRandomValue(): 1 | 2 | 3 | 4 {
    return Math.floor(Math.random() * 4) + 1 as 1 | 2 | 3 | 4;
}
function getMixedValue(): 1 | "hello" | true | City.London {
    switch (getRandomValue()) {
        case 1:
            return 1;
        case 2:
            return "hello";
        case 3:
            return true;
        case 4:
            return City.London;
    }
}
console.log(`MixValue =  ${getMixedValue()}`);
console.log('---------------------------------------------------------------');

// type overrides using type unions
function getMixedValueForOverrides(input: 1): 1;
function getMixedValueForOverrides(input: 2 | 3): "hello" | true;
function getMixedValueForOverrides(input: 4): City.London;
function getMixedValueForOverrides(input: number): 1 | "hello" | true | City.London {
    switch (input) {
        case 1:
            return 1;
        case 2:
            return "hello";
        case 3:
            return true;
        case 4:
        default:
            return City.London;
    }
}
const first = getMixedValueForOverrides(1);
const second = getMixedValueForOverrides(2);
const third = getMixedValueForOverrides(3);
const fourth = getMixedValueForOverrides(4);
console.log(`first = ${first}, second = ${second}, third = ${third}, fourth = ${fourth}`);
console.log('---------------------------------------------------------------');

// type aliases
type comboType = [string, number | true, 1 | 2 | 3, City][];
function getComboTypeValue(input: comboType): comboType {
    return [["Apples", 100, 2, City.London], ["Oranges", true, 3, City.NY], ...input];
}
const result: comboType = getComboTypeValue([["Bananas", true, 1, City.Paris]]);
console.log(`ComboTypeValue: ${result}, length = ${result.length}`);
type Task = [number, string, boolean];
type TaskCollection = Task[];
function addTask(task: Task, sources: TaskCollection | null): TaskCollection {
    if (sources === null) {
        return [task];
    }

    return [...sources, task];
}
let tasks = addTask([1, "firsttask", false], []);
tasks = addTask([2, "secondtask", true], tasks);
tasks = addTask([3, "thirdtask", false], tasks);
console.log(`tasks = ${tasks}`);



