export enum City {
    London = "London",
    Paris = "Paris",
    NY = "New York"
}

export enum Feature { Waterproof, Insulated }

enum Product { Hat, Gloves = 20, Umbrella = 300 }

export function runEnums(): void {

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

    // here we cannot use City[o] as string cannot be used to index type `City`
    [City.London, City.Paris, City.NY].forEach((o: City | any) =>
        console.log(`City : ${o}, type = ${typeof o}`));
}
