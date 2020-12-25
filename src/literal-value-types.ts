import { City } from "./enums";

export function runLiteralValueTypes(): void {
    let restrictedValue: 1 | 2 | 3 = 3;
    console.log(`restrictedValue: ${restrictedValue}`)
    function calculatedPrice(quantity: 1 | 2 | null, price: number): number {
        if (quantity === null) return 0;
        return quantity * price;
    }
    let total = calculatedPrice(null, 19.99);
    console.log(`Price: ${total}`);
    total = calculatedPrice(2, 19.99);
    console.log(`Price: ${total}`);
    function getRandomValue(): 1 | 2 | 3 | 4 {
        return Math.floor(Math.random() * 4) + 1 as 1 | 2 | 3 | 4;
    }
    function getMixedValue(): 1 | "hello" | true | City.London {
        switch (getRandomValue()) {
            case 1:
                return 1;
            case 2:
                return "hello";
            case 3:
                return true;
            case 4:
                return City.London;
        }
    }
    console.log(`MixValue =  ${getMixedValue()}`);
}
