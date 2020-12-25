// functions
function calculateTax(amount: number,
    format: boolean = false,
    discount: number = 0,
    ...extraFees: number[]
): string | number | null {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2 - discount
        + extraFees.reduce((total, val) => total + val, 0);
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

export function runFunction(): void {
    const taxNumber = calculateTax(100) as number;
    const taxString = calculateTax(100, true) as string;
    const taxBoolean = calculateTax(100, false) as any as boolean;
    console.log(`TaxNumber = ${taxNumber} \t TaxString = ${taxString}`);
    console.log(`string value= ${taxString.charAt(0)}`);
    console.log(`Boolean Value = ${taxBoolean}`);
    console.log('---------------------------------------------------------------');

    const taxValue = calculateTax(0);
    if (typeof taxValue === "number") {
        // here type of taxValue is number because of type guard
        console.log(`taxValue is Number Value: ${taxValue.toFixed(2)}`);
    } else if (typeof taxValue === "string") {
        // here type of taxValue is string becase of type guard
        console.log(`taxValue is String Value: ${taxValue.charAt(0)}`)
    } else {
        if (taxValue === null) {
            console.log("taxValue is null");
        } else {
            console.log(typeof taxValue);
            let value: never = taxValue;
            console.log(`Unexpected type for value: ${value}`);
        }
    }
    console.log('---------------------------------------------------------------');

    switch (typeof taxValue) {
        case "number":
            // here type of taxValue is number because of type guard
            console.log(`taxValue is Number Value: ${taxValue.toFixed(2)}`);
            break;
        case "string":
            // here type of taxValue is string because of type guard
            console.log(`taxValue is String Value: ${taxValue.charAt(0)}`);
            break;
        default:
            if (taxValue === null) {
                console.log("taxValue is null");
            } else {
                console.log(typeof taxValue);
                let value: never = taxValue;
                console.log(`Unexpected type for value: ${value}`);
            }
    }
}
