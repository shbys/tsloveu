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

    collate(targetData: U[]): (T & U)[] {
        let results: (T & U)[] = [];
        this.items.forEach(item=> {
            targetData.forEach(o=> {
                results.push({...o,...item});
            });
        });
        return results;
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

    let dataWithNameCityPros = new DataCollectionWithConstrains<{ name: string },{ city: string }>(
        { name: "Shoes" }, { name: "Computer" }, { name: "Umbrella" }
    );
    let dataWithMameCityProsAfterCollate = dataWithNameCityPros.collate(
        [{ city: "Parris" }, { city: "London" }, { city: "Shanghai" }]
    );
    console.log(`NameCityData = ${JSON.stringify(dataWithMameCityProsAfterCollate)}`);
}