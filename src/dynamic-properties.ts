interface Product {
    name: string;
    price: number;
}

class SportsProduct implements Product {
    constructor(
        public name: string,
        public category: string,
        public price: number) { }
}

class ProductGroup {
    constructor(...initialProducts: [string, Product][]) {
        initialProducts.forEach(o => this[o[0]] = o[1]);
    }

    // here Classes can define an index signature to allow properties to be created dynamically 
    // outside the constructor
    // An index signature uses square brackets to specify the type of the property keys,
    // followed by a type annotation that restricts the types that can be used to created
    // dynamic properties.
    [p: string]: Product;
}

export function runDynamicProperties(): void {
    let group
        = new ProductGroup(["shoes", new SportsProduct("Shoes", "Running", 90.50)]);
    group.hat = new SportsProduct("Hat", "Skiing", 20);
    group["umbrellas"] = new SportsProduct("Umbrella", "Life", 45);
    Object.keys(group).forEach(k => console.log(`Property Name: ${k}`));
    console.log(`umbrellas: ${JSON.stringify(group["umbrellas"])}`);
} 