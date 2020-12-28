import { TodoCollection } from "./todoCollection";
import { TodoItem } from "./todoItem";

export function runTodo(): void {
    let todos = [
        new TodoItem(1, "Buy Flowers"),
        new TodoItem(2, "Get Shoes"),
        new TodoItem(3, "Collect Tickets"),
        new TodoItem(4, "Call Joe", true)
    ];

    let collection = new TodoCollection("Adam", todos);
    let newId = collection.addTodo("Go for run");
    let todoItem = collection.getTodoById(newId);
    console.log(JSON.stringify(todoItem));

    let itemCount = collection.getItemCount();
    console.clear();
    console.log(`${collection.userName}'s Todo List ([${itemCount.incomlete}] items to do, [${itemCount.total - itemCount.incomlete}] done)`);
    // collection.removeComplete();
    collection.getToDoItems(true).forEach(o => o.printDetails());
}