type shapeType = {
    name: string;
    price: number;
};

class Collection<T extends shapeType, K extends keyof T>
    implements Iterable<T> {
    private items: Map<T[K], T>;

    constructor(private propertyName: K, ...initialItems: T[]) {
        this.items = new Map<T[K], T>();
        this.add(...initialItems);
    }

    [Symbol.iterator](): Iterator<T> {
        return this.items.values();
    }

    add(...newItems: T[]): void {
        newItems.forEach((o) => this.items.set(o[this.propertyName], o));
    }

    get(key: T[K]): T | undefined {
        return this.items.get(key);
    }

    get count(): number {
        return this.items.size;
    }
}

export function runGenericsIterable(): void {
    let productCollection: Collection<
        shapeType,
        "name"
    > = new Collection("name", { name: "Shoes", price: 200 });
    console.log(`There are ${productCollection.count} products`);
    let itemByKey = productCollection.get("Shoes");
    console.log(`Item: ${itemByKey?.name}, ${itemByKey?.price}`);
}
