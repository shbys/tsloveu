import { TodoItem } from "./todoItem";


type ItemCount = {
    total: number;
    incomlete: number;
};

export class TodoCollection {
    private nextId: number = 1;
    protected itemMap = new Map<number, TodoItem>();
    constructor(
        public userName: string, todoItems: TodoItem[] = []
    ) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    getTodoById(id: number): TodoItem | undefined {
        return this.itemMap.get(id);
    }

    getToDoItems(includeComplete: boolean = false): TodoItem[] {
        return [...this.itemMap.values()]
            .filter(o => includeComplete || !o.complete);
    }

    addTodo(task: string): number {
        this.nextId = Math.max(...this.itemMap.keys()) + 1;
        this.itemMap.set(this.nextId, (new TodoItem(this.nextId, task)));
        return this.nextId;
    }

    markComplete(id: number, complete: boolean) : void {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }

    removeComplete() : void {
        this.itemMap.forEach(o => {
            if (o.complete) {
                this.itemMap.delete(o.id);
            }
        });
    }

    getItemCount(): ItemCount {
        return {
            total: this.itemMap.size,
            incomlete: this.getToDoItems(false).length
        }
    }
}
