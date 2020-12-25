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

class DataCollectionWithConstrain<T extends { name: string }> extends DataCollection<T> {

}

class DataCollectionWithConstrains<T extends { name: string }, U extends { city: string }>
    extends DataCollection<T> {
    private comboDataItems: (T&U)[] = [];

    collate(targetData: U[]): void {
        this.items.forEach(item => {
            targetData.forEach(o => {
                this.comboDataItems.push({ ...o, ...item });
            });
        });
    }

    find(name: string): (T&U) | undefined{
        return this.comboDataItems.find(o => o.name === name);
    }
}

export function runGenerics(): void {
    let dataInt = new DataCollection<number>(1, 2, 3);
    let dataString = new DataCollection<string>("Shoes", "Computers", "Hat");
    let firstInt = dataInt.getItem(0);
    console.log(`first int =  ${firstInt}`);
    let firstString = dataString.getItem(0);
    console.log(`first string =  ${firstString}`);

    let dataWithNamePro = new DataCollectionWithConstrain<{ name: string }>(
        { name: "Shoes" }, { name: "Computer" }, { name: "Umbrella" }
    );
    let firstWithNamePro = dataWithNamePro.getItem(0);
    console.log(`first Obj With Name =  ${firstWithNamePro.name}`);

    let dataWithNameCityPros = new DataCollectionWithConstrains<{ name: string }, { city: string }>(
        { name: "Shoes" }, { name: "Computer" }, { name: "Umbrella" }
    );
    dataWithNameCityPros.collate(
        [{ city: "Parris" }, { city: "London" }, { city: "Shanghai" }]
    );
    console.log(`first Obj With NameCity =  ${JSON.stringify(dataWithNameCityPros.find("Shoes"))}`);
}