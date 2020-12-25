import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";
import { TodoCollection } from "./todoCollection";
import { TodoItem } from "./todoItem";

/**
 * The `schemaType` is used when the Lowdb database is created,
 * and the compiler is able to check the way the data is used
 * when it is read from the database
 */
type schemaType = {
    tasks: { id: number; task: string; complete: boolean; }[]
};

export class JsonTodoCollection extends TodoCollection {
    private database: lowdb.LowdbSync<schemaType>;

    constructor(public userName: string, todoItems: TodoItem[] = []) {
        super(userName, []);

        this.database = lowdb(new FileSync("dist/Todos.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach(o => this.itemMap.set(o.id, new TodoItem(o.id, o.task, o.complete)))
        } else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(o => this.itemMap.set(o.id, o));
        }
    }

    addTodo(task: string): number {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }

    markComplete(id: number, complete: boolean): void {
        super.markComplete(id, complete);
        this.storeTasks();
    }

    removeComplete(): void {
        super.removeComplete();
        this.storeTasks();
    }

    private storeTasks(): void {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}