import { TodoItem } from "../todoItem";


test("check todoItem value", () => {
    let todoItem = new TodoItem(1,"newtask");
    expect(todoItem.complete).toBe(false);
});