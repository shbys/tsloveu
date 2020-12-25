class DataCollection<T> {
    protected items: T[] = [];

    constructor(...initialItems: T[]) {
        this.items.push(...initialItems);
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    getItem(index: number): T {
        return this.items[index];
    }
}

class DataCollectionWithConstrain<
    T extends { name: string }
> extends DataCollection<T> {}

class DataCollectionWithConstrains<
    T extends { name: string },
    U extends { city: string }
> extends DataCollection<T> {
    private comboDataItems: (T & U)[] = [];

    collate(targetData: U[]): void {
        this.items.forEach((item) => {
            targetData.forEach((o) => {
                this.comboDataItems.push({ ...o, ...item });
            });
        });
    }

    find(name: string): (T & U) | undefined {
        return this.comboDataItems.find((o) => o.name === name);
    }
}

type shapeType = { name: string };

interface Collection<T extends shapeType> {
    add(...newItems: T[]): void;
    find(name: string): T | undefined;
    count: number;
}

abstract class ArrayCollection<T extends shapeType> implements Collection<T> {
    protected items: T[] = [];

    add(...newItems: T[]): void {
        this.items.push(...newItems);
    }

    abstract find(searchTerm: string): T | undefined;

    get count(): number {
        return this.items.length;
    }
}

class ProductCollection extends ArrayCollection<{ name: string }> {
    find(searchTerm: string): { name: string } | undefined {
        return this.items.find((item) => item.name === searchTerm);
    }
}

function getValue<T, K extends keyof T>(item: T, keyName: K): T[K] {
    return item[keyName];
}

export function runGenerics(): void {
    let dataInt = new DataCollection<number>(1, 2, 3);
    let dataString = new DataCollection<string>("Shoes", "Computers", "Hat");
    let firstInt = dataInt.getItem(0);
    console.log(`first int =  ${firstInt}`);
    let firstString = dataString.getItem(0);
    console.log(`first string =  ${firstString}`);

    let dataWithNamePro = new DataCollectionWithConstrain<{ name: string }>(
        { name: "Shoes" },
        { name: "Computer" },
        { name: "Umbrella" }
    );
    let firstWithNamePro = dataWithNamePro.getItem(0);
    console.log(`first Obj With Name =  ${firstWithNamePro.name}`);

    let dataWithNameCityPros = new DataCollectionWithConstrains<
        { name: string },
        { city: string }
    >({ name: "Shoes" }, { name: "Computer" }, { name: "Umbrella" });
    dataWithNameCityPros.collate([
        { city: "Parris" },
        { city: "London" },
        { city: "Shanghai" },
    ]);
    console.log(
        `first Obj With NameCity =  ${JSON.stringify(
            dataWithNameCityPros.find("Shoes")
        )}`
    );

    let productCollection: Collection<{
        name: string;
    }> = new ProductCollection();
    productCollection.add(
        { name: "Shoes" },
        { name: "Computer" },
        { name: "Umbrella" }
    );
    let productByFind = productCollection.find("Shoes");
    console.log(`Product Coll Find Shoes =  ${productByFind?.name}`);

    let obj = { name: "Shoes", city: "London", price: 100 };
    console.log(`name = ${getValue(obj, "name")}`);
    console.log(`city = ${getValue(obj, "city")}`);
    console.log(`price = ${getValue(obj, "price")}`);
}
