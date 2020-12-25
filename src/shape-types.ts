import { Feature } from "./enums";

type ProductType = {
    id: number,
    name: string,
    price?: number
};
type PersonType = {
    id: string,
    name: string,
    city: string
};
type ProductPersonType = {
    id: number | string,
    name: string
};

type ProductCombo = {
    name: string;
    price?: number;
    hasFeature?(feature: Feature): boolean
};

function isPerson(obj: any): obj is PersonType {
    return obj.city !== undefined;
}

export function runShapeType(): void {
    let hat1 = { name: "Hat", price: 100 };
    let gloves1 = { name: "Gloves", price: 75 };
    let umbrella1 = { name: "Umbrella" };
    // here we use price? `optional properties` to make a shape type more flexible
    // allowing it to match objects that don't have those properties.
    let products1: { name: string, price?: number }[] = [hat1, gloves1, umbrella1];
    products1.forEach(prod => console.log(`${prod.name}: ${prod.price}`));

    let hat2 = { name: "hat", price: 100 };
    let gloves2 = { name: "Gloves", price: 75 };
    let umbrella2 = {
        name: "Umbrella", price: 30,
        hasFeature: (feature: Feature) => feature === Feature.Waterproof
    };
    let products3: { name: string; price?: number; hasFeature?(feature: Feature): boolean }[]
        = [hat2, gloves2, umbrella2];
    products3.forEach(prod => console.log(`${prod.name}: ${prod.price} `
        + `Waterproof: ${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"}`));

    let product4: ProductCombo[] = [hat2, gloves2, umbrella2];
    product4.forEach(prod => console.log(`${prod.name}: ${prod.price} `
        + `Waterproof: ${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"}`));

    let hat4 = { id: 1, name: "Hat", price: 100 };
    let gloves4 = { id: 2, name: "Gloves", price: 75 };
    let umbrella4 = { id: 3, name: "Umbrella", price: 30 };
    let bob4 = { id: "bsmith", name: "Bob", city: "London" };
    let dataItems: (ProductType | PersonType)[] = [hat4, gloves4, umbrella4, bob4];
    dataItems.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`));
    dataItems.forEach(o => {
        if (isPerson(o)) {
            console.log(`Person: ${o.name}: ${o.city}`);
        } else {
            console.log(`Product: ${o.name}: ${o.price}`)
        }
    });
    let dataItems1: ProductPersonType[] = [hat4, gloves4, umbrella4, bob4];
    dataItems1.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`));
}
